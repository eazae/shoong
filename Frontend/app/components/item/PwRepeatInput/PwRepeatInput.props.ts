import { ILogin } from '@screens/Login/Login.props';
import { Control, FieldError, UseFormGetValues } from 'react-hook-form';

export interface IPwRepeatInput {
  control: Control<any>;
  getValues: UseFormGetValues<any>;
  errors: { passwordRepeat?: FieldError | undefined };
}
