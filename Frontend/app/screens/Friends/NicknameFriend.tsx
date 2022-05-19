import Button from '@components/common/Button';
import Input from '@components/common/TextInput/TextInput';
import SearchResultView from '@containers/Friends/SearchResultView/SearchResultView';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { getUserWithNickname } from '@services/api/friends/friendsAPI';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';
import { UserSearchResultType } from 'types/apiTypes';

const Container = styled.View`
  margin-top: 30px;
  padding: 0px 20px;
`;

const NicknameFriend: React.FC<NativeStackScreenProps<any, 'Friends'>> = ({ navigation }) => {
  const [nickname, setNickname] = useState('');
  const [searchResult, setSearchResult] = useState<UserSearchResultType>();
  const [isRequested, setIsRequested] = useState(false);

  // const { isLoading, data, isRefetching } = useQuery<Array<FriendType>>('searchFriendByPhone', () =>
  //   getUserWithPhone(nickname)
  // );

  const handleSearch = async () => {
    setIsRequested(false);
    const { status, data } = await getUserWithNickname(nickname);
    if (status === 200) {
      const { user_email, user_nickname, user_phone_number } = data;
      // const param: FriendType= {};
      // Object.assign(param, { user_email, user_nickname, user_phone_number });
      setSearchResult({ user_email, user_nickname, user_phone_number });
    } else Alert.alert('문제');
    setIsRequested(true);
    // 임시
    // setSearchResult({
    //   user_profile_image: 'https://picsum.photos/200',
    //   user_nickname: '찾은 사용자',
    //   user_phone_number: '010-0090-3988',
    // });
  };

  useEffect(() => {
    setIsRequested(false);
  }, []);

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
