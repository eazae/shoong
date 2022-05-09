import Avatar from '@components/common/Avatar';
import Input from '@components/common/Input/Input';
import { UserCircle } from 'phosphor-react-native';
import { useState } from 'react';
import { View } from 'react-native';
import { UserInfoType } from 'types/apiTypes';

const UserInfoSettings = () => {
  const [info, setInfo] = useState<UserInfoType>();
  const [isEdit, setIsEdit] = useState(false);

  return (
    <View>
      {/* <Avatar /> */}
      <UserCircle size={56} color="#ffffff" weight="fill" style={{ width: '100%' }} />
      {/* <Input label="이름" keyboardType="default" disabled presetValue={`555`} /> */}
      {!isEdit ? (
        <>
          <Input
            label="닉네임"
            placeholder={info?.user_nickname ?? '닉네임'}
            keyboardType="default"
            presetValue={info?.user_nickname}
          />
          <Input label="비밀번호" placeholder="새로운 비밀번호" keyboardType="default" isPassword />
          <Input placeholder="새로운 비밀번호" keyboardType="default" isPassword />
          <Input
            label="휴대폰 번호"
            placeholder={info?.user_phone_number ?? '000-0000-0000'}
            keyboardType="phone-pad"
            presetValue={info?.user_phone_number}
          />
        </>
      ) : (
        <></>
      )}
    </View>
  );
};

export default UserInfoSettings;
