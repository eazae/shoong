import Avatar from '@components/common/Avatar';
import Input from '@components/common/TextInput/TextInput';
import PassWordInput from '@components/item/PassWordInput';
import PwRepeatInput from '@components/item/PwRepeatInput';
import UserInfoForm from '@containers/Settings/UserInfo/UserInfoForm';
import UserInfoView from '@containers/Settings/UserInfo/UserInfoView';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { IJoin } from '@screens/Join/Join.props';
import { getUserInfo } from '@services/api/user/userAPI';
import { UserCircle } from 'phosphor-react-native';
import { useEffect, useState } from 'react';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { View } from 'react-native';
import { UserInfoType } from 'types/apiTypes';

const info: UserInfoType = {
  cards: [
    {
      card_address: 'string',
      card_name: 'string',
      createdAt: '2022-05-16T05:12:12.635Z',
      deletedAt: '2022-05-16T05:12:12.635Z',
      id: 'string',
      updatedAt: '2022-05-16T05:12:12.635Z',
    },
  ],
  createdAt: '2022-05-16T05:12:12.635Z',
  deletedAt: '2022-05-16T05:12:12.635Z',
  followees: [
    {
      followee: 'string',
      follower: 'string',
      id: 'string',
    },
  ],
  followers: [
    {
      followee: 'string',
      follower: 'string',
      id: 'string',
    },
  ],
  id: 'string',
  updatedAt: '2022-05-16T05:12:12.635Z',
  user_email: 'ssafy@shoong.com',
  user_nickname: '야옹스',
  user_password: 'password123!',
  user_phone_number: '010-0000-1234',
  user_profile_image: 'https://picsum.photos/200',
};

const UserInfoSettings: React.FC<NativeStackScreenProps<any>> = ({ navigation, route }) => {
  // const [info, setInfo] = useState<UserInfoType>();
  // const [info, setInfo] = useState<UserInfoType>();
  const [isEdit, setIsEdit] = useState(route.params?.isEdit);
  const forms = useForm<IJoin>();
  console.log(isEdit);

  // const [newNickname, setNewNickname] = useState('')
  // const [newPassword, setNewPassword] = useState('')
  // const [newNickname, setNewNickname] = useState('')

  // const getAccountInfo = async () => {
  //   const response = await getUserInfo();
  //   console.log(response);
  //   setInfo(response.data);
  // };

  // useEffect(() => {
  //   getAccountInfo();
  // }, []);

  return (
    <View>
      {/* <UserCircle size={56} color="#ffffff" weight="fill" style={{ width: '100%' }} /> */}
      {route.params?.isEdit ? (
        <FormProvider {...forms}>
          <UserInfoForm />
        </FormProvider>
      ) : (
        <UserInfoView info={info} />
      )}
    </View>
  );
};

export default UserInfoSettings;
