import ICChip from '@components/common/ICChip';
import CoinBadges from '@components/layout/CoinBadges';
import { defaultCardBg } from '@containers/CardLarge/CardLarge';
import { useNavigation } from '@react-navigation/native';
import { contractAddr, getEthBalance, getTokenBalance } from '@services/web3/getBalance';
import Palette from '@theme/Palette';
import Shadows from '@theme/Shadows';
import Typography from '@theme/Typography';

import { truncateLongWord } from '@utils/text';
import { useState } from 'react';
import { Pressable, useColorScheme } from 'react-native';
import { useQuery } from 'react-query';
import styled from 'styled-components/native';
import { CardApiProps } from './Card.props';

const Card = ({ card_address, card_name, id, card_profile_image, createdAt }: CardApiProps) => {
  const { data: ethBalance } = useQuery(['balance'], () => getEthBalance(card_address));
  const { data: tetherBalance } = useQuery(['balance'], () =>
    getTokenBalance(card_address, contractAddr['tether'])
  );
  const { data: manaBalance } = useQuery(['balance'], () =>
    getTokenBalance(card_address, contractAddr['mana'])
  );
  const isDark = useColorScheme() === 'dark';
  const [focus, setFocus] = useState(false);
  const { navigate } = useNavigation();
  const goToDetail = () => {
    navigate('Details', {
      screen: 'CardDetail',
      params: {
        card_address,
        title: card_name,
        card_profile_image: profile_image,
        createdAt,
      },
    });
  };
  const profile_image = card_profile_image || defaultCardBg;
  const balances = { ethBalance, tetherBalance, manaBalance };
  return (
    <Pressable
      onPress={goToDetail}
      onPressIn={() => setFocus(true)}
      onPressOut={() => setFocus(false)}
    >
      <Container blurRadius={6} source={{ uri: profile_image }}>
        <Filter focus={focus} isDark={isDark}>
          <Header>
            <CoinBadges {...balances} />
            <ICChip />
          </Header>
          <Body>
            <Balance size="h2" weight="bold">
              {ethBalance} 원
            </Balance>
            <Name size="body3" weight="regular">
              {truncateLongWord(card_name, 10)}
            </Name>
          </Body>
        </Filter>
        <Bottom>
          <Balance size="body3" weight="bold">
            CARD ID
          </Balance>
          <Name size="body3" weight="regular">
            {truncateLongWord(id, 10)}
          </Name>
        </Bottom>
      </Container>
    </Pressable>
  );
};

export const Container = styled.ImageBackground`
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

export default Card;
