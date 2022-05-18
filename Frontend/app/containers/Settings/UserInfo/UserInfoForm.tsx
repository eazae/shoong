import Avatar from '@components/common/Avatar';
import Button from '@components/common/Button';
import Divider from '@components/common/Divider/Divider';
import Input from '@components/common/TextInput/TextInput';
import PassWordInput from '@components/item/PassWordInput';
import PwRepeatInput from '@components/item/PwRepeatInput';
import { IJoin } from '@screens/Join/Join.props';
import { getUserInfo, updateUserInfo, updateUserPassword } from '@services/api/user/userAPI';
import { UserCircle } from 'phosphor-react-native';
import { useEffect, useState } from 'react';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { Alert, View } from 'react-native';
import styled from 'styled-components/native';
import { UserInfoBaseType, UserInfoType } from 'types/apiTypes';

const Container = styled.View`
  margin-top: 20px;
  padding: 0px 20px;
`;

interface UserInfoFormProps {
  info: UserInfoType;
  setIsEdit: any;
}

const UserInfoForm = ({ info, setIsEdit }: UserInfoFormProps) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useFormContext<IJoin>();

  const forms = useForm<IJoin>();

  const [newNickname, setNewNickname] = useState(info.user_nickname);
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirm, setNewPasswordConfirm] = useState('');

  const saveUserInfo = async () => {
    // 정보 확인
    if (newPassword !== newPasswordConfirm) Alert.alert('비밀번호가 일치하지 않습니다');
    else {
      let response = await updateUserInfo({
        user_nickname: newNickname,
        user_phone_number: info.user_phone_number,
        // newPassword,
        user_profile_image: info.user_profile_image,
      });
      if (response.status) response = await updateUserPassword(newPassword);
      else Alert.alert('오류가 발생했습니다');
      if (response.status) {
        setIsEdit(false);
        Alert.alert('정보 수정', '사용자 정보가 성공적으로 변경되었습니다.');
      } else Alert.alert('오류가 발생했습니다');
    }
  };

  return (
    <Container>
      <Input
        label="닉네임"
        placeholder={info?.user_nickname ?? '닉네임'}
        keyboardType="default"
        presetValue={newNickname}
        setValue={setNewNickname}
      />
      {/* <PassWordInput control={control} errors={errors} />
      <PwRepeatInput control={control} errors={errors} getValues={getValues} /> */}
      <Input
        label="비밀번호"
        placeholder="새로운 비밀번호"
        keyboardType="default"
        isPassword
        setValue={setNewPassword}
      />
      <Input
        placeholder="새로운 비밀번호 확인"
        keyboardType="default"
        isPassword
        setValue={setNewPasswordConfirm}
      />
      <Input
        label="휴대폰 번호"
        placeholder={info?.user_phone_number ?? '000-0000-0000'}
        keyboardType="phone-pad"
        presetValue={info.user_phone_number}
        setValue={info.user_phone_number}
        disabled
      />
      <Divider />
      <Button title="수정 완료" onPress={saveUserInfo} />
    </Container>
  );
};

export default UserInfoForm;
