import Button from '@components/common/Button';
import Input from '@components/common/TextInput/TextInput';
import SearchResultView from '@containers/Friends/SearchResultView/SearchResultView';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import styled from 'styled-components/native';
import { FriendType } from 'types/apiTypes';

const Container = styled.View`
  margin-top: 30px;
  /* padding: 20px 10px; */
`;

const NicknameFriend: React.FC<NativeStackScreenProps<any, 'Friends'>> = ({ navigation }) => {
  const [nickname, setNickname] = useState('');
  const [searchResult, setSearchResult] = useState<FriendType>();
  const [isRequested, setIsRequested] = useState(false);

  // const { isLoading, data, isRefetching } = useQuery<Array<FriendType>>('searchFriendByPhone', () =>
  //   getUserWithPhone(nickname)
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
      user_nickname: '찾은 사용자',
      user_phone_number: '010-0090-3988',
    });
  };

  return (
    <>
      <Container>
        <Input keyboardType="default" placeholder="닉네임" setValue={setNickname} />
        <Button title="친구 찾기" disabled={nickname.length === 0} onPress={handleSearch} />
        {isRequested ? (
          <>
            <SearchResultView searchResult={searchResult} />
          </>
        ) : null}
      </Container>
    </>
  );
};

export default NicknameFriend;
