import styled from 'styled-components/native';
import { BlurView } from 'expo-blur';
import { Alert, StyleSheet, useColorScheme } from 'react-native';
import Avatar from '@components/common/Avatar';
import Typography from '@theme/Typography';
import { useEffect, useState } from 'react';
import { getTotalKRWBalance } from '@services/api/token/tokenAPI';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { getUserInfo } from '@services/api/user/userAPI';
import { CardType, UserInfoType } from 'types/apiTypes';

export const WALLET_HEADER_HEIGHT = 125;

interface WalletHeaderProps {
  // userName: string;
  // totalBalance: number;
  profileUri: string;
}

const WalletHeaderData: WalletHeaderProps = {
  // totalBalance: 100000,
  profileUri: 'https://blog.kakaocdn.net/dn/YmhBn/btrheysMts6/GhjC6XXXhWC30n7Fmcqok1/img.jpg',
};

const WalletHeader = () => {
  const [userInfo, setUserInfo] = useState({ user_nickname: '', user_profile_image: '' });
  const isDark = useColorScheme() === 'dark';

  const [totalBalance, setTotalBalance] = useState<number>(0);

  const getUserTotalKRWBalance = async (cards: Array<CardType>) => {
    console.log('cards');
    const balance = await getTotalKRWBalance(cards);
    console.log(balance);
  };

  const { profileUri } = WalletHeaderData;

  const getUser = async () => {
    const result = await getUserInfo();
    if (result.status === 200) {
      setUserInfo({
        user_nickname: result.data.user_nickname,
        // TODO "deafult image url" 오타 수정 요청
        user_profile_image:
          result.data.user_profile_image === 'deafult image url'
            ? ''
            : result.data.user_profile_image,
      });
      getUserTotalKRWBalance(result.data.cards);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <LayOut>
      <BlurView tint={isDark ? 'dark' : 'light'} intensity={30} style={StyleSheet.absoluteFill}>
        <ContentLayOut>
          <TextLayOut>
            <Typography size="body2" weight="bold">
              {userInfo.user_nickname}
              <Typography size="body3">님 안녕하세요</Typography>
            </Typography>
            <Typography size="body1" weight="bold">
              $ <Typography size="body1">{totalBalance}</Typography>
            </Typography>
          </TextLayOut>
          <Avatar
            size="small"
            isLoading={false}
            uri={userInfo.user_profile_image || profileUri}
            hasAlarm={true}
          />
        </ContentLayOut>
      </BlurView>
    </LayOut>
  );
};

const LayOut = styled.View`
  height: ${WALLET_HEADER_HEIGHT}px;
  background-color: transparent;
`;

const ContentLayOut = styled.View`
  height: ${WALLET_HEADER_HEIGHT}px;
  padding: 10px 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const TextLayOut = styled.View``;

export default WalletHeader;
