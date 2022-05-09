import Button from '@components/common/Button';
import EmailInput from '@components/item/EmailInput';
import HeaderGoBackBtn from '@components/item/HeaderGoBackBtn';
import PassWordInput from '@components/item/PassWordInput';
import PwRepeatInput from '@components/item/PwRepeatInput';
import { AuthLayOut } from '@containers/LoginAuth/LoginAuth.styled';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LayOut } from '@screens/Login/Login.styled';
import Color from '@theme/Color';
import Size from '@theme/Typography/Size';
import { isIos } from '@utils/native';
import { ArrowRight } from 'phosphor-react-native';
import { useFormContext } from 'react-hook-form';
import Instruction from './Instruction';
import { IJoin } from './Join.props';

const message = ['사용하실', '아이디와 비밀번호를', '입력해주세요'];

const Join: React.FC<NativeStackNavigationProp<any, 'Join'>> = ({ goBack }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useFormContext<IJoin>();
  const { navigate } = useNavigation();
  return (
    <>
      <HeaderGoBackBtn />
      <LayOut behavior={isIos() ? 'padding' : 'height'}>
        <Instruction messages={message} />
        <AuthLayOut>
          <EmailInput control={control} errors={errors} />
          <PassWordInput control={control} errors={errors} />
          <PwRepeatInput control={control} errors={errors} getValues={getValues} />
          <Button
            onPress={handleSubmit((data) => {
              console.log(data);
              navigate('Join', { screen: 'JoinCustom' });
            })}
            icon={<ArrowRight size={Size.body1} color={Color.textColor.light} />}
            title="다음"
          />
        </AuthLayOut>
      </LayOut>
    </>
  );
};

export default Join;
