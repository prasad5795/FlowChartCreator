import React from 'react';
import { typeToComponentMapping } from '.';
import { Controller } from 'react-hook-form';

export const FormFieldGroup = ({
  childrenAllIds,
  styleFromProps,
  config,
  control,
  register,
}: any) => {
  const childFormElements = childrenAllIds.map((fieldId: string) => {
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
            />
          );
        }}
      />
    );
  });

  return <div style={styleFromProps}>{childFormElements}</div>;
};
