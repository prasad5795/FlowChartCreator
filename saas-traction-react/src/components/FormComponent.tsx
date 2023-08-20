import { Button, Divider, Typography } from '@mui/material';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { AppContext } from '../context/appContext';
import { typeToComponentMapping } from './FormElements';
import Toast from 'light-toast';
import CloseIcon from '@mui/icons-material/Close';

export const FormComponent = () => {
  const { selectedNode, setSelectedNode, canvasNodes } = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  // should show error if config is empty
  const config = selectedNode.config || { byId: {}, allIds: [] };
  const defaultValues: any = {};
  config.allIds.map((fieldId: string) => {
    defaultValues[fieldId] = config[fieldId]?.defaultValue;
  });

  const {
    register,
    handleSubmit,
    watch,
    formState,
    control,
    setValue,
    setError,
    reset,
    resetField,
  } = useForm<any>({
    defaultValues,
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<any> = (data) => {
    const formData = new FormData();
    const jsonObj: any = {};
    try {
      const newConfig = { ...selectedNode.config };
      Object.keys(data).map((fieldId) => {
        newConfig.byId[fieldId].passthroughProps.value = data[fieldId];
        if (newConfig.byId[fieldId].type === 'FileUpload') {
          formData.append('files', data[fieldId]);
          formData.append('files_fieldId', fieldId);
        } else if (data[fieldId]) {
          formData.append(fieldId, data[fieldId]);
        }
      });
      formData.append('config', JSON.stringify(newConfig));

      selectedNode.config = newConfig;
      setLoading(true);
      axios.post('http://localhost:4000/submit-form', formData).then((res) => {
        const { everythingIsValid, nonValidFieldIdsWithMsg } = res?.data;
        selectedNode.config.allIds.map((fieldId: string) => {
          selectedNode.config.byId[fieldId].error = '';
        });
        if (!everythingIsValid) {
          Object.keys(nonValidFieldIdsWithMsg).map((fieldId: string) => {
            selectedNode.config.byId[fieldId].error =
              nonValidFieldIdsWithMsg[fieldId];
          });
          Toast.fail('Failed to save', 2000);
        }
        // seterrorState(!everythingIsValid);
        if (everythingIsValid) {
          Toast.success('Saved Successfully', 2000);
        }
        setLoading(false);
      });
    } catch (error) {
      console.log(
        '🚀 ~ file: FormComponent.tsx:64 ~ FormComponent ~ error:',
        error
      );
    }
  };

  const formElements = config.allIds.map((fieldId: string) => {
    const Component = typeToComponentMapping[config.byId[fieldId]?.type];
    return (
      <Controller
        key={fieldId}
        name={fieldId}
        control={control}
        render={({ field, fieldState, formState }) => {
          return (
            <Component
              styleFromProps={config.byId[fieldId]?.styleFromProps}
              {...config.byId[fieldId]?.passthroughProps}
              key={fieldId}
              {...(register(fieldId), {})}
              field={field}
              fieldState={fieldState}
              formState={formState}
              fieldId={fieldId}
              setValue={setValue}
              error={config.byId[fieldId].error}
              //for children of field group
              config={config}
              control={control}
              register={register}
            />
          );
        }}
      />
    );
  });

  useEffect(() => {
    selectedNode.config.allIds.map((fieldId: any) => {
      // restricted by browser for security reasons
      if (
        selectedNode?.config?.byId[fieldId].type !== 'FileUpload' &&
        selectedNode?.config?.byId[fieldId]?.passthroughProps?.value
      ) {
        setValue(
          fieldId,
          selectedNode?.config?.byId[fieldId]?.passthroughProps?.value || ''
        );
      }
    });
  }, [reset, resetField, selectedNode, setValue]);

  return (
    <div className="col-span-4">
      <header className="flex justify-between pl-2 mt-2">
        <Typography className="flex justify-center items-center" variant="h6">
          {selectedNode.data.label}
        </Typography>
        <Button onClick={() => setSelectedNode()} className="!text-black">
          <CloseIcon />
        </Button>
      </header>
      <Divider className="!my-2" />
      <form onSubmit={handleSubmit(onSubmit)} className="grid px-2 gap-1">
        {formElements}
      </form>
    </div>
  );
};
