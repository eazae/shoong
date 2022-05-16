// import Modal from '@components/common/Modal/Modal';
import Avatar from '@components/common/Avatar';
import Button from '@components/common/Button';
import Divider from '@components/common/Divider/Divider';
import { useNavigation } from '@react-navigation/native';
import { requestAddFriend, requestDeleteFriend } from '@services/api/friends/friendsAPI';
import Typography from '@theme/Typography';
import { Alert, Modal, TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';
import { FriendType } from 'types/apiTypes';

const Wrapper = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Container = styled.View`
  width: 70%;
  margin: 20px;
  background-color: ${(props) => props.theme.cardColor};
  border-radius: 10;
  padding: 35px;
  align-items: center;
  /* shadow-color: '#000';
  shadow-offset: {
    width: 0;
    height: 2;
  }
  shadow-opacity: 0.25;
  shadow-radius: 4; */
  /* elevation: 5; */
`;

const ButtonGroup = styled.View`
  /* display: flex; */
  /* justify-content: space-between; */
  flex-direction: row;
`;

interface FriendDetailModalProps {
  modalVisible: boolean;
  onModalClosed: any;
  data?: FriendType;
  onRefreshList: any;
}

const FriendDetailModal = ({
  modalVisible,
  onModalClosed,
  data,
  onRefreshList,
}: FriendDetailModalProps) => {
  // const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();

  const goToSendScreen = () => {
    //@ts-ignore
    navigation.navigate('..?', {});
    // onModalClosed();
  };

  const deleteFriend = async () => {
    Alert.alert('친구 삭제', `${data?.user_nickname}님을 친구 목록에서 정말 삭제하시겠습니까?`, [
      { text: '취소', style: 'cancel' },
      {
        text: '삭제',
        style: 'destructive',
        onPress: async () => {
          const response = await requestDeleteFriend(data!.user_nickname);
          console.log(response);
          onRefreshList();
          onModalClosed();
        },
      },
    ]);
  };

  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={onModalClosed}
      >
        <Wrapper onPress={onModalClosed}>
          <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
            <Container>
              {data ? (
                <>
                  <Avatar isLoading={false} uri={data.user_profile_image} size="large" />
                  <Divider />
                  <Typography size="body2" weight="bold">
                    {data.user_nickname}
                  </Typography>
                  <Typography size="body2">{data.user_phone_number}</Typography>
                </>
              ) : null}
              <Divider />
              <ButtonGroup>
                <Button title="송금하기" onPress={goToSendScreen} variant="primary" />
                <Button title="친구삭제" onPress={deleteFriend} variant="error" />
                {/* <Button title="닫기" /> */}
              </ButtonGroup>
            </Container>
          </TouchableWithoutFeedback>
        </Wrapper>
      </Modal>
    </>
  );
};

export default FriendDetailModal;
