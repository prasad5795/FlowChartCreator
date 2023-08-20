import { AppContext } from '../../context/appContext';
import { customClickHandlerMap } from '../../utils/customClickHandler';
import { Button } from '@mui/material';
import { useContext } from 'react';

export const FormTextButton = ({
  text,
  fieldId,
  clickHandlerName,
  styleFromProps,
  ...rest
}: any) => {
  const appcontextValue = useContext(AppContext);
  return (
    <Button
      onClick={(event) =>
        customClickHandlerMap[clickHandlerName] &&
        customClickHandlerMap[clickHandlerName](event, appcontextValue)
      }
      style={styleFromProps}
      {...rest}
    >
      {text}
    </Button>
  );
};
