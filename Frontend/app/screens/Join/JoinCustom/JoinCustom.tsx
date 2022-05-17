import Button from '@components/common/Button';
import DefaultInput from '@components/item/DefaultInput';
import HeaderGoBackBtn from '@components/item/HeaderGoBackBtn';
import { AuthLayOut } from '@containers/LoginAuth/LoginAuth.styled';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LayOut } from '@screens/Login/Login.styled';
import { serviceId } from '@services/sens/secret';
import sensInstance, {
  getMessage,
  getSENSRequestBodyData,
  getVerificationDigits,
} from '@services/sens/sens';
import Color from '@theme/Color';
import Size from '@theme/Typography/Size';
import { isIos } from '@utils/native';
import { ArrowRight, DeviceMobile } from 'phosphor-react-native';
import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import Instruction from '../Instruction';
import { IJoin } from '../Join.props';
import { submit } from './JoinCustom.hooks';
import { Phone, Row, Verify } from './JoinCustom.styled';

const message = ['다른 분이', '회원님을 알아보기 쉽게', '추가 정보를 입력해주세요'];

const JoinCustom: React.FC<NativeStackNavigationProp<any, 'JoinCustom'>> = () => {
  // state
  const [vDigits, setVDigits] = useState('');

  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
    trigger,
    watch,
  } = useFormContext<IJoin>();
  const { navigate } = useNavigation();
  const phoneNumber = watch('phoneNumber');

  useEffect(() => {
    const watchPhone = async () => {
      trigger('phoneNumber');
    };
    phoneNumber && watchPhone();
  }, [phoneNumber]);

  const requestSENSApi = async () => {
    const digits = getVerificationDigits();
    setVDigits(() => digits);
    const bodyData = getSENSRequestBodyData(
      getValues('phoneNumber'),
      getMessage(getValues('nickName'), digits)
    );
    await sensInstance
      .post(`sms/v2/services/${serviceId}/messages`, bodyData)
      .then((res) => console.log(res.data))
      .catch((err) => alert(err));
  };

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
          <Row>
            <Phone>
              <DefaultInput
                type="phone-pad"
                name="phoneNumber"
                placeholder="핸드폰 번호는 '-'를 제외하고 입력"
                control={control}
                errors={errors}
                rules={{
                  required: '핸드폰 번호는 필수입니다.',
                  validate: {
                    shouldPhoneNumber: (phoneNumber: string) => {
                      const regExp = /^010\d{3,4}\d{4}$/;
                      return regExp.test(phoneNumber) || '전화번호 양식을 확인해주세요';
                    },
                  },
                }}
              />
            </Phone>
            <Verify>
              <Button
                onPress={async () => {
                  await trigger('phoneNumber').then((res) => {
                    res && requestSENSApi();
                  });
                }}
                variant={false ? 'primary' : 'disabled'}
                title="인증하기"
                icon={<DeviceMobile size={Size.body1} color={Color.textColor.light} />}
              />
            </Verify>
          </Row>
          <DefaultInput
            type="numeric"
            name="verification"
            placeholder="인증번호"
            control={control}
            errors={errors}
            rules={{
              required: '인증번호를 입력해주세요',
              validate: {
                isCodeValid: () =>
                  getValues('verification') === vDigits || '인증번호가 일치하지 않습니다.',
              },
            }}
          />
          <Button
            onPress={handleSubmit((data) =>
              submit(data)
                .then(() => {
                  navigate('Join', { screen: 'JoinCreateOrLoad' });
                })
                .catch((err) => alert(err))
            )}
            icon={<ArrowRight size={Size.body1} color={Color.textColor.light} />}
            title="다음"
          />
        </AuthLayOut>
      </LayOut>
    </>
  );
};

export default JoinCustom;
