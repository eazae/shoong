import Button from '@components/common/Button';
import EmailInput from '@components/item/EmailInput';
import PassWordInput from '@components/item/PassWordInput';
import { useNavigation } from '@react-navigation/native';
import { ILogin } from '@screens/Login/Login.props';
import Color from '@theme/Color';
import Size from '@theme/Typography/Size';
import { ArrowRight } from 'phosphor-react-native';
import { useForm } from 'react-hook-form';
import { AuthLayOut } from './LoginAuth.styled';

const NOT_REGISTERED = '회원이 아니세요? 가입하러 가기';

const LoginAuth = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ILogin>();

  const { navigate } = useNavigation();
  const goToJoin = () => navigate('Join');

  return (
    <AuthLayOut>
      <EmailInput control={control} errors={errors} />
      <PassWordInput control={control} errors={errors} />
      <Button onPress={handleSubmit((data) => console.log(data))} title="Continue" />
      <Button
        onPress={goToJoin}
        variant="transparent"
        icon={<ArrowRight size={Size.body1} color={Color.textColor.primary} />}
        title={NOT_REGISTERED}
      />
    </AuthLayOut>
  );
};

export default LoginAuth;
