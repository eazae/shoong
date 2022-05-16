import Avatar from '@components/common/Avatar';
import Button from '@components/common/Button';
import Divider from '@components/common/Divider/Divider';
import Input from '@components/common/TextInput/TextInput';
import SearchResultView from '@containers/Friends/SearchResultView/SearchResultView';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Typography from '@theme/Typography';
import { useState } from 'react';
import styled from 'styled-components/native';
import { FriendType, UserInfoBaseType } from 'types/apiTypes';

const Container = styled.View`
  margin-top: 30px;
  /* padding: 20px 10px; */
`;

// const regPhone = /^01([0|1|6|7|8|9])-?([0-9]{4})-?([0-9]{4})$/;

const PhoneFriend: React.FC<NativeStackScreenProps<any, 'Friends'>> = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [searchResult, setSearchResult] = useState<FriendType>();
  const [isRequested, setIsRequested] = useState(false);
  // const [isMatchFound, setIsMatchFound] = useState(false);

  const isValid = (phoneNumber: string) => {
    return /^01([0|1|6|7|8|9])-?([0-9]{4})-?([0-9]{4})$/.test(phoneNumber);
  };

  // const { isLoading, data, isRefetching } = useQuery<Array<FriendType>>('searchFriendByPhone', () =>
  //   getUserWithPhone(phoneNumber)
  // );

  const handleSearch = async () => {
    setIsRequested(true);
    // const response = await getUserWithPhone(phoneNumber);
    // TODO
    // if (result){ setIsMatchFound(true);
    // setSearchResult(response.data);}
    // else
    // setIsMatchFound(false);

    // 임시
    setSearchResult({
      user_profile_image: 'https://picsum.photos/200',
      user_nickname: '예시계정',
      user_phone_number: '010-9999-9999',
    });
  };

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
        {/* <SearchResultModal
          modalVisible={modalVisible}
          onModalClosed={() => setModalVisible(!modalVisible)}
        /> */}
      </Container>
    </>
  );
};
export default PhoneFriend;
