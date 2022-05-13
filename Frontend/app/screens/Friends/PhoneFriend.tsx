import Button from '@components/common/Button';
import Modal from '@components/common/Modal/Modal';
import Input from '@components/common/TextInput/TextInput';
import SearchResultModal from '@containers/Friends/SearchResultModal.tsx/SearchResultModal';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { getUserWithPhone } from '@services/api/friends/friendsAPI';
import { useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components/native';
import { FriendType } from 'types/apiTypes';

const Container = styled.View`
  margin-top: 30px;
  /* padding: 20px 10px; */
`;

// const regPhone = /^01([0|1|6|7|8|9])-?([0-9]{4})-?([0-9]{4})$/;

const PhoneFriend: React.FC<NativeStackScreenProps<any, 'Friends'>> = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const isValid = (phoneNumber: string) => {
    return /^01([0|1|6|7|8|9])-?([0-9]{4})-?([0-9]{4})$/.test(phoneNumber);
  };

  // const { isLoading, data, isRefetching } = useQuery<Array<FriendType>>('searchFriendByPhone', () =>
  //   getUserWithPhone(phoneNumber)
  // );

  const handleSearch = async () => {
    // const result = await getUserWithPhone(phoneNumber);
    // TODO
    // if (result)
    setModalVisible(!modalVisible);
    // else console.log('일치하는 사용자 없음');
  };

  return (
    <>
      <Container>
        <Input keyboardType="phone-pad" placeholder="전화번호" setValue={setPhoneNumber} />
        <Button title="친구 찾기" disabled={!isValid(phoneNumber)} onPress={handleSearch} />
        <SearchResultModal
          modalVisible={modalVisible}
          onModalClosed={() => setModalVisible(!modalVisible)}
        />
      </Container>
    </>
  );
};
export default PhoneFriend;
