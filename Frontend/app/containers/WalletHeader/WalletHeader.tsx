import styled from 'styled-components/native';
import { BlurView } from 'expo-blur';
import { Alert, StyleSheet, useColorScheme } from 'react-native';
import Avatar from '@components/common/Avatar';
import Typography from '@theme/Typography';
import { useEffect, useState } from 'react';
import { getTotalKRWBalance } from '@services/api/token/tokenAPI';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { getUserInfo } from '@services/api/user/userAPI';
import { useRecoilValue } from 'recoil';
import { appTotalBalanceState } from '@atoms/atoms';

export const WALLET_HEADER_HEIGHT = 125;

const profileUri = 'https://blog.kakaocdn.net/dn/YmhBn/btrheysMts6/GhjC6XXXhWC30n7Fmcqok1/img.jpg';

const WalletHeader = () => {
  const [userInfo, setUserInfo] = useState({ user_nickname: '', user_profile_image: '' });
  const isDark = useColorScheme() === 'dark';
  const total = useRecoilValue(appTotalBalanceState);
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
  }, [total]);

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
              총 자산 <Typography size="body1">{total.toLocaleString()}</Typography> 원
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
