import { AppContext } from '../../context/appContext';
import { Button } from '@mui/material';
import { useEffect, useRef, useContext, useState } from 'react';
import FormHelperText from '@mui/material/FormHelperText';
import { iconToComponentMap } from '../CustomNode/iconToComponentMap';

export const FormFileUpload = ({
  text,
  fieldState,
  formState,
  field: { onChange: formOnChange, value: formFieldValue, ...rest1 },
  fieldId,
  error,
  icon,
  styleFromProps,
  setValue,
  ...rest
}: any) => {
  const inputElRef: any = useRef();

  const handleFileUpload = (event: any) => {
    setValue(fieldId, event.target.files[0]);
  };

  const IconComponent = icon ? iconToComponentMap[icon] : <></>;
  return (
    <>
      {formFieldValue?.name}
      <Button variant="outlined" component="label" style={styleFromProps}>
        <IconComponent />
        {text}

        <input
          id={fieldId}
          type="file"
          ref={inputElRef}
          onChange={handleFileUpload}
          style={{
            opacity: '0',
            width: '1px',
          }}
        />
      </Button>
      <FormHelperText error={error} className="px-[14px]">
        {error}
      </FormHelperText>
    </>
  );
};
