import Avatar from '@components/common/Avatar';
import Divider from '@components/common/Divider/Divider';
import TabButton from '@components/common/TabButton/TabButton';
import { useNavigation } from '@react-navigation/native';
import { getUserInfo } from '@services/api/user/userAPI';
import Typography from '@theme/Typography';

import { CaretRight, UserCircle } from 'phosphor-react-native';
import { useEffect, useState } from 'react';
import styled, { useTheme } from 'styled-components/native';
import { UserInfoType } from 'types/apiTypes';

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
  justify-content: center;
`;

const Nickname = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: ${(props) => props.theme.textColor};
  /* line-height: 40px; */
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
  const [userInfo, setUserInfo] = useState({ user_nickname: '', user_profile_image: '' });
  const theme = useTheme();
  const navigation = useNavigation();

  const goToUserInfoSettings = () => {
    //@ts-ignore
    navigation.navigate('사용자 정보', {});
  };

  const getUser = async () => {
    const result = await getUserInfo();
    if (result.status === 200)
      setUserInfo({
        user_nickname: result.data.user_nickname,
        // TODO "deafult image url" 오타 수정 요청
        user_profile_image:
          result.data.user_profile_image === 'deafult image url'
            ? ''
            : result.data.user_profile_image,
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <TabButtonContainer onPress={goToUserInfoSettings}>
        {userInfo.user_profile_image ? (
          <Avatar uri={userInfo.user_profile_image} isLoading={false} size="tab" />
        ) : (
          <UserCircle size={60} color={theme.subColor} weight="fill" />
        )}
        <TabButtonContent>
          <Nickname>{userInfo.user_nickname}</Nickname>
          <Divider size="small" />
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
