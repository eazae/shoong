import { Control, FieldError } from 'react-hook-form';

export interface IEmailInput {
  control: Control<any>;
  errors: { email?: FieldError | undefined };
}
