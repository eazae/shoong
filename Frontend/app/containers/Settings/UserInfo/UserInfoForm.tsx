import Avatar from '@components/common/Avatar';
import Button from '@components/common/Button';
import Input from '@components/common/TextInput/TextInput';
import PassWordInput from '@components/item/PassWordInput';
import PwRepeatInput from '@components/item/PwRepeatInput';
import { IJoin } from '@screens/Join/Join.props';
import { getUserInfo, updateUserInfo } from '@services/api/user/userAPI';
import { UserCircle } from 'phosphor-react-native';
import { useEffect, useState } from 'react';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { View } from 'react-native';
import { UserInfoBaseType, UserInfoType } from 'types/apiTypes';

const UserInfoForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useFormContext<IJoin>();

  const [info, setInfo] = useState<UserInfoType>();
  const [isEdit, setIsEdit] = useState(false);
  const forms = useForm<IJoin>();

  // const [newNickname, setNewNickname] = useState('')
  // const [newPassword, setNewPassword] = useState('')
  // const [newNickname, setNewNickname] = useState('')

  const saveUserInfo = async (data: UserInfoBaseType) => {
    const response = await updateUserInfo(data);
    console.log(response);
  };

  return (
    <View>
      <Input
        label="닉네임"
        placeholder={info?.user_nickname ?? '닉네임'}
        keyboardType="default"
        presetValue={info?.user_nickname}
      />
      {/* <PassWordInput control={control} errors={errors} />
      <PwRepeatInput control={control} errors={errors} getValues={getValues} /> */}
      <Input label="비밀번호" placeholder="새로운 비밀번호" keyboardType="default" isPassword />
      <Input placeholder="새로운 비밀번호" keyboardType="default" isPassword />
      <Input
        label="휴대폰 번호"
        placeholder={info?.user_phone_number ?? '000-0000-0000'}
        keyboardType="phone-pad"
        presetValue={info?.user_phone_number}
      />
      <Button title="수정 완료" />
    </View>
  );
};

export default UserInfoForm;
