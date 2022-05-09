import { Control, FieldError } from 'react-hook-form';

export interface IPassWordInput {
  control: Control<any>;
  errors: { passWord?: FieldError | undefined };
}
