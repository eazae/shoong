import Avatar from '@components/common/Avatar';
import { TouchableHighlight } from 'react-native';
import styled from 'styled-components/native';
import { FriendType } from 'types/apiTypes';

const Container = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 8px;
`;

const Column = styled.View`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const Nickname = styled.Text`
  color: ${(props) => props.theme.textColor};
  font-size: 16px;
  padding-bottom: 10px;
`;

const Phone = styled.Text`
  color: ${(props) => props.theme.textDisabledColor};
`;

type FriendsItemProps = FriendType;

const FriendsItem = (data: FriendsItemProps) => {
  return (
    <Container>
      <Avatar isLoading={false} uri={data.user_image} />
      <Column>
        <Nickname>{data.user_nickname}</Nickname>
        <Phone>{data.user_phone_number}</Phone>
      </Column>
    </Container>
  );
};

export default FriendsItem;
