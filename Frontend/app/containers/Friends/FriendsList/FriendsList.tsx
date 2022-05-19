import Divider from '@components/common/Divider/Divider';
import Loader from '@components/common/Loader/Loader';
import { getFriendList } from '@services/api/friends/friendsAPI';
import { Alert, FlatList } from 'react-native';
import { useQuery, useQueryClient } from 'react-query';
import styled from 'styled-components/native';
import { FriendType } from 'types/apiTypes';
import FriendsItem from '../FriendsItem/FriendsItem';

const Container = styled.View``;

const Title = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const ListTitle = styled.Text`
  /* width: 100%; */
  color: ${(props) => props.theme.textColor};
  font-size: 24px;
  font-weight: 600;
  padding: 30px 0px 0px 20px;
`;

const FriendCount = styled(ListTitle)`
  color: ${(props) => props.theme.textHighlightColor};
  font-size: 24px;
  padding-left: 10px;
`;

const FlatListScroll = styled.FlatList`
  margin-top: 20px;
` as unknown as typeof FlatList;

const FriendsList = () => {
  const queryClient = useQueryClient();

  const { isLoading, data, isRefetching } = useQuery<Array<FriendType>>(['friendsList'], () =>
    getFriendList()
  );

  const refreshList = () => {
    queryClient.refetchQueries(['friendsList']);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <Container>
      {data ? (
        <>
          <Title>
            <ListTitle>친구 목록</ListTitle>
            <FriendCount>{data.length}</FriendCount>
          </Title>
          <FlatListScroll
            data={data}
            keyExtractor={(item: FriendType) => item.user_nickname}
            ItemSeparatorComponent={Divider}
            renderItem={({ item }) => <FriendsItem data={item} onRefreshList={refreshList} />}
          />
        </>
      ) : null}
    </Container>
  );
};

export default FriendsList;
