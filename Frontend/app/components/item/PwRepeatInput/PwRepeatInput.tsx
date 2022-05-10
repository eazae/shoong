import Input from '@components/common/Input';
import { Controller } from 'react-hook-form';
import { IPwRepeatInput } from './PwRepeatInput.props';

const PwRepeatInput = ({ control, errors, getValues }: IPwRepeatInput) => {
  return (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <Input
          onBlur={onBlur}
          value={value}
          onChange={onChange}
          placeholder="비밀번호 확인"
          error={errors.passwordRepeat?.message}
          type="password"
        />
      )}
      name="passwordRepeat"
      rules={{
        required: '비밀번호 재확인이 필요해요',
        validate: {
          shouldMatch: (repeat: string) => {
            const passWord = getValues().passWord;
            return repeat === passWord || '비밀번호가 일치하는지 확인해주세요';
          },
        },
      }}
    />
  );
};

export default PwRepeatInput;
