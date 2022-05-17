import Avatar from '@components/common/Avatar';
import Button from '@components/common/Button';
import Divider from '@components/common/Divider/Divider';
import { requestAddFriend } from '@services/api/friends/friendsAPI';
import Typography from '@theme/Typography';
import { useState } from 'react';
import styled from 'styled-components/native';
import { FriendType } from 'types/apiTypes';

const Container = styled.View`
  justify-content: center;
  align-items: center;
  padding-top: 30px;
`;

const SearchResult = styled.View`
  width: 90%;
  margin: 20px;
  background-color: ${(props) => props.theme.subBgColor};
  border-radius: 10;
  padding: 35px;
  justify-content: center;
  align-items: center;
`;

const SearchResultTitle = styled.Text`
  width: 100%;
  color: ${(props) => props.theme.textColor};
  font-size: 24px;
  font-weight: 600;
  padding: 0px 20px;
`;

const SearchFailTitle = styled.Text`
  /* width: 100%; */
  color: ${(props) => props.theme.textDisabledColor};
  font-size: 20px;
  font-weight: 300;
  text-align: center;
  padding: 80px 20px;
`;

interface SearchResultViewProps {
  searchResult: FriendType | undefined;
}

const SearchResultView = ({ searchResult }: SearchResultViewProps) => {
  const [isAdded, setIsAdded] = useState(false);

  const addFriend = async () => {
    // const response = await requestAddFriend(searchResult);
    // if (response.status === 200)
    setIsAdded(true);
  };

  return (
    <Container>
      {searchResult ? (
        <>
          <SearchResultTitle>검색 결과</SearchResultTitle>
          <SearchResult>
            <Avatar isLoading={false} uri={searchResult.user_profile_image} size="large" />
            <Divider />
            <Typography size="body2" weight="bold">
              {searchResult.user_nickname}
            </Typography>
            <Typography size="body2">{searchResult.user_phone_number}</Typography>
            <Divider />
            <Button
              title={isAdded ? '친구 추가됨' : '친구 추가하기'}
              onPress={addFriend}
              variant={isAdded ? 'disabled' : 'secondary'}
              disabled={isAdded}
            />
          </SearchResult>
        </>
      ) : (
        <SearchFailTitle>찾는 사용자가 없습니다.{'\n'}다시 검색해주세요.</SearchFailTitle>
      )}
    </Container>
  );
};

export default SearchResultView;
