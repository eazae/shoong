import Button from '@components/common/Button';
import DefaultInput from '@components/item/DefaultInput';
import HeaderGoBackBtn from '@components/item/HeaderGoBackBtn';
import { AuthLayOut } from '@containers/LoginAuth/LoginAuth.styled';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LayOut } from '@screens/Login/Login.styled';
import Color from '@theme/Color';
import Size from '@theme/Typography/Size';
import { isIos } from '@utils/native';
import { ArrowRight } from 'phosphor-react-native';
import { useFormContext } from 'react-hook-form';
import Instruction from '../Instruction';
import { IJoin } from '../Join.props';

const message = ['다른 분이', '회원님을 알아보기 쉽게', '추가 정보를 입력해주세요'];

const JoinCustom: React.FC<NativeStackNavigationProp<any, 'JoinCustom'>> = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useFormContext<IJoin>();
  const { navigate, setOptions } = useNavigation();

  return (
    <>
      <HeaderGoBackBtn />
      <LayOut behavior={isIos() ? 'padding' : 'height'}>
        <Instruction messages={message} />
        <AuthLayOut>
          <DefaultInput
            type="default"
            name="nickName"
            placeholder="닉네임"
            control={control}
            errors={errors}
            rules={{
              required: '닉네임을 입력해주세요',
              validate: { nickNameShouldUnique: () => true || '닉네임이 일치해야 합니다' },
            }}
          />
          <DefaultInput
            type="phone-pad"
            name="phoneNumber"
            placeholder="전화번호로도 회원님을 찾을 수 있어요!"
            control={control}
            errors={errors}
            rules={{
              required: '전화번호는 필수입니다.',
              validate: { nickNameShouldUnique: () => true || '닉네임이 일치해야 합니다' },
            }}
          />
          <DefaultInput
            type="numeric"
            name="verficationNumber"
            placeholder="인증번호"
            control={control}
            errors={errors}
            rules={{
              required: '인증번호를 입력해주세요',
              validate: { isCodeValid: () => true || '인증번호가 일치하지 않습니다.' },
            }}
          />
          <Button
            onPress={handleSubmit((data) => {
              console.log(data);
              navigate('Join', { screen: 'JoinCreateOrLoad' });
            })}
            icon={<ArrowRight size={Size.body1} color={Color.textColor.light} />}
            title="다음"
          ></Button>
        </AuthLayOut>
      </LayOut>
    </>
  );
};

export default JoinCustom;
