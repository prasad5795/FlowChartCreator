import { TextField, TextFieldProps } from '@mui/material';
import styled from 'styled-components';

export const FormTextField = ({
  placeholder,
  id,
  value,
  error,
  fieldState,
  formState,
  field: { onChange: formOnChange, value: formFieldValue, ...rest1 },
  fieldId,
  styleFromProps,
  ...rest
}: any) => {
  return (
    <StyledTextField
      id={id}
      placeholder={placeholder}
      value={formFieldValue}
      onChange={formOnChange}
      error={error}
      helperText={error}
      style={styleFromProps}
      {...rest}
    />
  );
};

const StyledTextField = styled(TextField)`
  input {
    height: 0.43rem;
  }
`;
