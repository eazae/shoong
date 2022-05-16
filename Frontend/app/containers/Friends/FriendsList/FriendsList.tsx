import Divider from '@components/common/Divider/Divider';
import Loader from '@components/common/Loader/Loader';
import { getFriendList } from '@services/api/friends/friendsAPI';
import { Alert, FlatList } from 'react-native';
import { useQuery, useQueryClient } from 'react-query';
import styled from 'styled-components/native';
import { FriendType } from 'types/apiTypes';
import FriendsItem from '../FriendsItem/FriendsItem';

const Container = styled.View``;

const Title = styled.Text`
  width: 100%;
  color: ${(props) => props.theme.textColor};
  font-size: 24px;
  font-weight: 600;
  padding: 30px 0px 0px 20px;
`;

const FlatListScroll = styled.FlatList`
  margin-top: 20px;
` as unknown as typeof FlatList;

const data: Array<FriendType> = [
  {
    user_profile_image: 'https://picsum.photos/200',
    user_nickname: '삼성맨',
    user_phone_number: '010-0239-2349',
  },
  {
    user_profile_image: 'https://picsum.photos/200',
    user_nickname: '삼성맨2',
    user_phone_number: '010-0239-2349',
  },
  {
    user_profile_image: 'https://picsum.photos/200',
    user_nickname: '삼성맨3',
    user_phone_number: '010-0239-2349',
  },
  {
    user_profile_image: 'https://picsum.photos/200',
    user_nickname: '삼성맨4',
    user_phone_number: '010-0239-2349',
  },
];
const FriendsList = () => {
  const isLoading = false;
  // (https://stackoverflow.com/a/68111112)
  // const { isLoading, data, isRefetching } = useQuery<Array<FriendType>>(
  //   ['friendsList', userId],
  //   () => getFriendList(userId)
  // );

  // const { isLoading, data, isRefetching } = useQuery<Array<FriendType>>(['friendsList'], () =>
  //   getFriendList()
  // );

  const refreshList = () => {
    Alert.alert('API 연동 후 작업필요');
  };

  return isLoading ? (
    <Loader />
  ) : (
    <Container>
      <Title>친구 목록</Title>
      {data ? (
        <FlatListScroll
          data={data}
          keyExtractor={(item: FriendType) => item.user_nickname}
          ItemSeparatorComponent={Divider}
          renderItem={({ item }) => <FriendsItem data={item} onRefreshList={refreshList} />}
        />
      ) : null}
    </Container>
  );
};

export default FriendsList;
