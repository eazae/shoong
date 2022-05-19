import Button from '@components/common/Button';
import Divider from '@components/common/Divider/Divider';
import Input from '@components/common/TextInput/TextInput';
import SearchResultView from '@containers/Friends/SearchResultView/SearchResultView';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { getUserWithPhone } from '@services/api/friends/friendsAPI';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';
import { FriendType, UserSearchResultType } from 'types/apiTypes';

const Container = styled.View`
  margin-top: 30px;
  padding: 0px 20px;
`;

// const regPhone = /^01([0|1|6|7|8|9])-?([0-9]{4})-?([0-9]{4})$/;

const PhoneFriend: React.FC<NativeStackScreenProps<any, 'Friends'>> = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [searchResult, setSearchResult] = useState<UserSearchResultType>();
  const [isRequested, setIsRequested] = useState(false);

  const isValid = (phoneNumber: string) => {
    return /^01([0|1|6|7|8|9])-?([0-9]{4})-?([0-9]{4})$/.test(phoneNumber);
  };

  const handleSearch = async () => {
    setIsRequested(false);
    const { status, data } = await getUserWithPhone(phoneNumber);
    if (status === 200) {
      const { user_email, user_nickname, user_phone_number, user_profile_image } = data;
      // const param: FriendType= {};
      // Object.assign(param, { user_email, user_nickname, user_phone_number });
      setSearchResult({ user_email, user_nickname, user_phone_number, user_profile_image });
    } else Alert.alert('문제가 발생했습니다. 잠시 후 다시 시도해주세요.');
    setIsRequested(true);
  };

  useEffect(() => {
    setIsRequested(false);
  }, []);

  return (
    <>
      <Container>
        <Input keyboardType="phone-pad" placeholder="전화번호" setValue={setPhoneNumber} />
        <Button title="친구 찾기" disabled={!isValid(phoneNumber)} onPress={handleSearch} />
        <Divider />
        {isRequested ? (
          <>
            <SearchResultView searchResult={searchResult} />
          </>
        ) : null}
      </Container>
    </>
  );
};
export default PhoneFriend;
