import { Noop } from 'react-hook-form';

export interface IInput {
  label?: string;
  placeholder: string;
  onChange: (...event: any[]) => void;
  error?: string;
  value: string;
  type?: 'password' | 'numeric' | 'default' | 'email-address' | 'phone-pad';
  onBlur?: Noop;
}
