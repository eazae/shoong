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
// recoil
import { useSetRecoilState } from 'recoil';
import { isLoggedInState } from '@atoms/atoms';
import { login } from '@services/api/user/userAPI';
import { Alert } from 'react-native';
import { setJWTValue } from '@utils/secureStore';

const NOT_REGISTERED = '회원이 아니세요? 가입하러 가기';

const errLogin = {
  400: '이메일과 비밀번호를 확인해주세요',
};

const LoginAuth = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ILogin>();

  // @신지우, updated by @yoonBaek
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  /* 로그인 시 */
  // const result = login('아이디', '비밀번호').then();
  // if (result.successCode) {
  //   setIsLogged((curr) => !curr);
  // }

  const { navigate } = useNavigation();
  const goToJoin = () => navigate('Join');

  return (
    <AuthLayOut>
      <EmailInput control={control} errors={errors} />
      <PassWordInput control={control} errors={errors} />
      <Button
        onPress={handleSubmit(async (data) => {
          login(data)
            .then(async (res) => {
              await setJWTValue(res.data);
              setIsLoggedIn(() => true);
            })
            .catch((err) => {
              Alert.alert('😥\n로그인이 실패했어요', errLogin[400]);
            });
        })}
        title="Continue"
      />
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
