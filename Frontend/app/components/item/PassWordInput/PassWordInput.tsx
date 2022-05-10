import Input from '@components/common/Input';
import { Controller } from 'react-hook-form';
import { IPassWordInput } from './PassWordInput.props';

const PassWordInput = ({ control, errors }: IPassWordInput) => {
  return (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <Input
          onBlur={onBlur}
          value={value}
          onChange={onChange}
          placeholder="비밀번호"
          error={errors.passWord?.message}
          type="password"
        />
      )}
      name="passWord"
      rules={{
        required: '비밀번호를 입력해주세요',
        validate: {
          shouldFollowRule: (password: string) => {
            const regExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i;
            return regExp.test(password) || '최소 8자, 영문과 숫자의 조합이어야 합니다';
          },
        },
      }}
    />
  );
};

export default PassWordInput;
