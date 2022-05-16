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
import { isJWTValid, login } from '@services/api/user/userAPI';
import { getJWTValue, setJWTValue } from '@utils/secureStore';
import { Alert } from 'react-native';

const NOT_REGISTERED = '회원이 아니세요? 가입하러 가기';

const LoginAuth = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ILogin>();

  // @신지우, updated by @yoonBaek
  const setIsLogged = useSetRecoilState(isLoggedInState);
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
        onPress={handleSubmit((data) => {
          // getJWTValue().then((res) => {
          //   isJWTValid(res || '').then((res) => console.log(res.status));
          //   Alert.alert('Your jwt', res || '');
          // });
          login(data)
            .then((res) => {
              setJWTValue(res.data);
            })
            .catch(() =>
              Alert.alert('로그인이 되지 않아요', '아이디와 비밀번호를 다시 한 번 확인해주세요')
            );
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
