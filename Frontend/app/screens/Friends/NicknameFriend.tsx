import Button from '@components/common/Button';
import Input from '@components/common/TextInput/TextInput';
import SearchResultModal from '@containers/Friends/SearchResultModal.tsx/SearchResultModal';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  margin-top: 30px;
  /* padding: 20px 10px; */
`;

const NicknameFriend: React.FC<NativeStackScreenProps<any, 'Friends'>> = ({ navigation }) => {
  const [nickname, setNickname] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const isValid = (nickname: string) => {
    return /^01([0|1|6|7|8|9])-?([0-9]{4})-?([0-9]{4})$/.test(nickname);
  };

  // const { isLoading, data, isRefetching } = useQuery<Array<FriendType>>('searchFriendByPhone', () =>
  //   getUserWithPhone(nickname)
  // );

  const handleSearch = async () => {
    // const result = await getUserWithPhone(nickname);
    // TODO
    // if (result)
    setModalVisible(!modalVisible);
    // else console.log('일치하는 사용자 없음');
  };

  return (
    <>
      <Container>
        <Input keyboardType="default" placeholder="닉네임" setValue={setNickname} />
        <Button title="친구 찾기" disabled={nickname.length === 0} onPress={handleSearch} />
        <SearchResultModal
          modalVisible={modalVisible}
          onModalClosed={() => setModalVisible(!modalVisible)}
        />
      </Container>
    </>
  );
};

export default NicknameFriend;
