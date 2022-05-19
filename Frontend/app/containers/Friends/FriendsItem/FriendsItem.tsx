import Avatar from '@components/common/Avatar';
import { UserCircle } from 'phosphor-react-native';
import { useState } from 'react';
import styled, { useTheme } from 'styled-components/native';
import { FriendType } from 'types/apiTypes';
import FriendDetailModal from '../FriendDetailModal/FriendDetailModal';

const Container = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 16px;
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

// type FriendsItemProps = FriendType;
interface FriendsItemProps {
  data: FriendType;
  onRefreshList: any;
}

const FriendsItem = ({ data, onRefreshList }: FriendsItemProps) => {
  const theme = useTheme();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Container onPress={() => setModalVisible(!modalVisible)}>
      {data.user_profile_image === 'deafult image url' ? (
        <UserCircle size={50} color={theme.subColor} weight="fill" />
      ) : (
        <Avatar uri={data.user_profile_image} isLoading={false} size="tab" />
      )}
      <Column>
        <Nickname>{data.user_nickname}</Nickname>
        <Phone>{data.user_phone_number}</Phone>
      </Column>
      <FriendDetailModal
        modalVisible={modalVisible}
        onModalClosed={() => setModalVisible(!modalVisible)}
        data={data}
        onRefreshList={onRefreshList}
      />
    </Container>
  );
};

export default FriendsItem;
