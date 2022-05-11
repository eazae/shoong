import Avatar from '@components/common/Avatar';
import TabButton from '@components/common/TabButton/TabButton';
import { useNavigation } from '@react-navigation/native';
import Typography from '@theme/Typography';

import { CaretRight, UserCircle } from 'phosphor-react-native';
import styled, { useTheme } from 'styled-components/native';

const Text = styled.Text`
  margin-bottom: 8px;
  color: ${(props) => props.theme.lightBgColor};
`;

const TabButtonContainer = styled.TouchableOpacity`
  width: 100%;
  /* height: 60px; */
  padding: 8px 16px;
  background-color: ${(props) => props.theme.subBgColor};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.errorColor};
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

const TabText = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => props.theme.textDisabledColor};
`;

const TabIcon = styled.View`
  margin-left: 8px;
`;

const AccountTabButton = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  const goToUserInfoSettings = () => {
    //@ts-ignore
    navigation.navigate('사용자 정보', {});
  };
  return (
    <>
      <TabButtonContainer onPress={goToUserInfoSettings}>
        {/* TODO: <Avatar> 로 대체 */}
        <UserCircle size={50} color={theme.disabledColor} weight="fill" />
        <TabButtonContent>
          <Nickname>닉네임</Nickname>
          <TabText>내 정보 수정하기</TabText>
        </TabButtonContent>
        <TabIcon>
          <CaretRight
            size={16}
            style={{ alignItems: 'flex-end' }}
            weight="bold"
            color={theme.textColor}
          />
        </TabIcon>
      </TabButtonContainer>
    </>
  );
};

export default AccountTabButton;
