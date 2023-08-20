import { FormLabel } from './FormLabel';
import { FormCheckbox } from './FormCheckbox';
import { FormDropdown } from './FormDropdown';
import { FormFileUpload } from './FormFileUpload';
import { FormTextField } from './FormTextField';
import { FormRadioBtns } from './FormRadioBtns';
import { FormSwitchInput } from './FormSwitchInput';
import { FormTextButton } from './FormTextButton';
import { FormFieldGroup } from './FormFieldGroup';

export const typeToComponentMapping:any = {
  Checkbox: FormCheckbox,
  Dropdown: FormDropdown,
  FileUpload: FormFileUpload,
  Label: FormLabel,
  RadioButton: FormRadioBtns,
  Switch: FormSwitchInput,
  Button: FormTextButton,
  TextField: FormTextField,
  FieldGroup: FormFieldGroup,
};
