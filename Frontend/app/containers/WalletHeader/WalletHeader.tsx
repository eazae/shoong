import styled from 'styled-components/native';
import { BlurView } from 'expo-blur';
import { StyleSheet, useColorScheme } from 'react-native';
import Avatar from '@components/common/Avatar';
import Typography from '@theme/Typography';

export const WALLET_HEADER_HEIGHT = 125;

interface WalletHeaderProps {
  userName: string;
  totalBalance: number;
  profileUri: string;
}

const WalletHeaderData: WalletHeaderProps = {
  userName: '김싸피',
  totalBalance: 100000,
  profileUri: 'https://blog.kakaocdn.net/dn/YmhBn/btrheysMts6/GhjC6XXXhWC30n7Fmcqok1/img.jpg',
};

const WalletHeader = () => {
  const isDark = useColorScheme() === 'dark';
  const { profileUri, userName, totalBalance } = WalletHeaderData;
  return (
    <LayOut>
      <BlurView tint={isDark ? 'dark' : 'light'} intensity={30} style={StyleSheet.absoluteFill}>
        <ContentLayOut>
          <TextLayOut>
            <Typography size="body2" weight="bold">
              {userName}
              <Typography size="body3">님 안녕하세요</Typography>
            </Typography>
            <Typography size="body1" weight="bold">
              $ <Typography size="body1">{totalBalance}</Typography>
            </Typography>
          </TextLayOut>
          <Avatar size="small" isLoading={false} uri={profileUri} hasAlarm={true} />
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
