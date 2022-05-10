import Input from '@components/common/Input';
import { Controller } from 'react-hook-form';
import { IEmailInput } from './EmailInput.props';

const EmailInput = ({ control, errors }: IEmailInput) => {
  return (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <Input
          type="email-address"
          onBlur={onBlur}
          value={value}
          onChange={onChange}
          placeholder={'이메일'}
          error={errors.email?.message}
        />
      )}
      name="email"
      rules={{
        required: '이메일은 필수입니다',
        validate: {
          isEmail: (email: string) => {
            const regExp =
              /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
            return regExp.test(email) || '올바른 이메일 형식이 아니에요';
          },
        },
      }}
    />
  );
};

export default EmailInput;
