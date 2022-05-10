import Input from '@components/common/Input';
import { Controller } from 'react-hook-form';
import { IDefaultInput } from './DefaultInput.prps';

const DefaultInput = ({ type, rules, control, errors, placeholder, name }: IDefaultInput) => {
  return (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <Input
          type={type}
          onBlur={onBlur}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          error={errors[name]?.message}
        />
      )}
      name={name}
      rules={rules}
    />
  );
};

export default DefaultInput;
