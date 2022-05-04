import TabButton from '@components/common/TabButton/TabButton';

import { CaretRight, UserCircle } from 'phosphor-react-native';
import styled from 'styled-components/native';

const Text = styled.Text`
  margin-bottom: 8px;
  color: ${(props) => props.theme.lightBgColor};
`;

const TabButtonContainer = styled.TouchableOpacity`
  width: 100%;
  /* height: 60px; */
  padding: 8px 16px;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TabButtonIcon = styled.View`
  /* align-items: center; */
  /* margin-right: 8px; */
`;

const TabButtonContent = styled.View`
  width: 75%;
  padding: 8px;
`;

const Nickname = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: ${(props) => props.theme.textColor};
  line-height: 40px;
`;

const TabIcon = styled.View`
  margin-left: 8px;
`;

const AccountTabButton = () => {
  return (
    <>
      {/* <TabButton
        onPress={() => console.log('사용자 계정 설정')}
        title={'닉네임'}
        icon={<UserCircle size={32} color="#ffffff" weight="fill" />}
      >
        <Text>내 정보 수정하기</Text>
      </TabButton> */}
      {/* TODO: <Avatar> 로 대체 */}
      <TabButtonContainer>
        <UserCircle size={50} color="#ffffff" weight="fill" />
        <TabButtonContent>
          <Nickname>닉네임</Nickname>
          <Text>내 정보 수정하기</Text>
        </TabButtonContent>
        <TabIcon>
          <CaretRight size={16} style={{ alignItems: 'flex-end' }} weight="bold" color="white" />
        </TabIcon>
      </TabButtonContainer>
    </>
  );
};

export default AccountTabButton;
