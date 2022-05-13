import Divider from '@components/common/Divider/Divider';
import Loader from '@components/common/Loader/Loader';
import { getFriendList } from '@services/api/friends/friendsAPI';
import { FlatList } from 'react-native';
import { useQuery, useQueryClient } from 'react-query';
import styled from 'styled-components/native';
import { FriendsListType, FriendType } from 'types/apiTypes';
import FriendsItem from '../FriendsItem/FriendsItem';

const Container = styled.View``;

const FlatListScroll = styled.FlatList`
  margin-top: 20px;
` as unknown as typeof FlatList;

const data: Array<FriendType> = [
  {
    user_image: 'https://picsum.photos/200',
    user_nickname: '삼성맨',
    user_phone_number: '010-0239-2349',
  },
  {
    user_image: 'https://picsum.photos/200',
    user_nickname: '삼성맨2',
    user_phone_number: '010-0239-2349',
  },
  {
    user_image: 'https://picsum.photos/200',
    user_nickname: '삼성맨3',
    user_phone_number: '010-0239-2349',
  },
  {
    user_image: 'https://picsum.photos/200',
    user_nickname: '삼성맨4',
    user_phone_number: '010-0239-2349',
  },
];
const FriendsList = () => {
  // const queryClient = useQueryClient()
  const isLoading = false;

  // (https://stackoverflow.com/a/68111112)
  // const { isLoading, data, isRefetching } = useQuery<Array<FriendType>>(
  //   ['friendsList', userId],
  //   () => getFriendList(userId)
  // );

  return isLoading ? (
    <Loader />
  ) : (
    <Container>
      {data ? (
        <FlatListScroll
          data={data}
          keyExtractor={(item: FriendType) => item.user_nickname}
          ItemSeparatorComponent={Divider}
          renderItem={({ item }) => (
            <FriendsItem
              user_image={item.user_image}
              user_nickname={item.user_nickname}
              user_phone_number={item.user_phone_number}
            />
          )}
        />
      ) : null}
    </Container>
  );
};

export default FriendsList;
