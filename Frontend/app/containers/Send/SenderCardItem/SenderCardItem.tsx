import { appTotalBalanceState } from '@atoms/atoms';
import CoinBadges from '@components/layout/CoinBadges';
import { defaultCardBg } from '@containers/CardLarge/CardLarge';
import { getCardKRWBalance, getCoinPrice, getTotalKRWBalance } from '@services/api/token/tokenAPI';
import { contractAddr, getEthBalance, getTokenBalance } from '@services/web3/getBalance';
import Palette from '@theme/Palette';
import Shadows from '@theme/Shadows';
import Typography from '@theme/Typography';
import { truncateLongWord } from '@utils/text';
import { useEffect, useState } from 'react';
import { Alert, useColorScheme } from 'react-native';
import { useQuery } from 'react-query';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components/native';
import { CardType } from 'types/apiTypes';

export const Container = styled.TouchableOpacity``;

export const Card = styled.ImageBackground`
  padding: 0px 0px 0px;
  width: 160px;
  height: 253px;
  border-radius: 10px;
  justify-content: space-between;
  box-shadow: ${Shadows.common};
  overflow: hidden;
`;

const Filter = styled.View<{ focus: boolean; isDark: boolean }>`
  background-color: ${({ isDark, focus }) =>
    focus ? Palette.primaryOpacity : isDark ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.4)'};
  height: 200px;
  padding: 20px 10px;
  justify-content: space-between;
`;

const Body = styled.View``;
const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const Bottom = styled.View`
  padding: 10px;
`;
const Balance = styled(Typography)``;
const Name = styled(Typography)``;

interface SenderCardItemProps {
  card: CardType;
  prices: any;
  selectSendCard: any;
}

const SenderCardItem = ({ card, prices, selectSendCard }: SenderCardItemProps) => {
  const {
    isLoading: isEthLoading,
    isRefetching: ethLoaded,
    data: ethBalance,
  } = useQuery(['balance', 'ether', card.card_address], () => getEthBalance(card.card_address), {
    refetchInterval: 2500,
  });
  const {
    isLoading: isTetherLoading,
    isRefetching: tetherLoaded,
    data: tetherBalance,
  } = useQuery(
    ['balance', 'tether', card.card_address],
    () => getTokenBalance(card.card_address, contractAddr['tether']),
    { refetchInterval: 2500 }
  );
  const {
    isLoading: isManaLoading,
    isRefetching: manaLoaded,
    data: manaBalance,
  } = useQuery(
    ['balance', 'mana', card.card_address],
    () => getTokenBalance(card.card_address, contractAddr['mana']),
    { refetchInterval: 2500 }
  );
  const setTotal = useSetRecoilState(appTotalBalanceState);
  const isDark = useColorScheme() === 'dark';
  const [focus, setFocus] = useState(false);
  const [prev, setPrev] = useState(0);
  const profile_image = card.card_profile_image || defaultCardBg;
  const balances = { ethBalance, tetherBalance, manaBalance };

  const isRefetching = ethLoaded || tetherLoaded || manaLoaded;
  const isLoading = isEthLoading || isManaLoading || isTetherLoading;

  const totalBalance =
    manaBalance * prices?.decentraland + // @ts-ignore
    ethBalance * prices?.ethereum + // @ts-ignore
    tetherBalance * prices?.tether;

  useEffect(() => {
    if (totalBalance > 0) {
      setTotal((now) => now - prev);
      setPrev(() => totalBalance);
      setTotal((now) => now + totalBalance);
    }
  }, [isRefetching]);

  useEffect(() => {
    // alert(prices);
    if (totalBalance > 0) {
      setTotal((now) => now - prev);
      setPrev(() => totalBalance);
      setTotal((now) => now + totalBalance);
    }
  }, [isLoading]);

  return (
    <Container onPress={() => selectSendCard(card)}>
      <Card blurRadius={6} source={{ uri: card.card_profile_image }}>
        <Filter focus={focus} isDark={isDark}>
          <Header>
            <CoinBadges {...balances} />
            {/* <ICChip /> */}
          </Header>
          <Body>
            <Balance size="h2" weight="bold">
              {totalBalance?.toLocaleString() || '불러오는 중'} 원
            </Balance>
            <Name size="body3" weight="regular">
              {truncateLongWord(card.card_name, 10)}
            </Name>
          </Body>
        </Filter>
        <Bottom>
          <Balance size="body3" weight="bold">
            CARD ID
          </Balance>
          <Name size="body3" weight="regular">
            {truncateLongWord(card.id!, 10)}
          </Name>
        </Bottom>
      </Card>
    </Container>
  );
};

export default SenderCardItem;
