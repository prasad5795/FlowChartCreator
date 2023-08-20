import { Typography } from '@mui/material';

export const FormLabel = ({ text, variant, fieldId, styleFromProps }:any) => {
  return (
    <Typography variant={variant} style={styleFromProps}>
      {text}
    </Typography>
  );
};
