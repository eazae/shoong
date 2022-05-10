import { IInput } from '@components/common/Input/Input.props';
import { Control, FieldError, UseControllerProps } from 'react-hook-form';

export interface IDefaultInput extends UseControllerProps {
  control: Control<any>;
  errors: Record<string, FieldError | undefined>;
  placeholder: string;
  type: IInput['type'];
}
