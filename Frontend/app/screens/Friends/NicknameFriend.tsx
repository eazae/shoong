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

  const handleSearch = async () => {
    setIsRequested(false);
    const { status, data } = await getUserWithNickname(nickname);
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
