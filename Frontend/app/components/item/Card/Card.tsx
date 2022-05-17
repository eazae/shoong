import Coin from '@components/common/Coin';
import { useNavigation } from '@react-navigation/native';
import Color from '@theme/Color';
import Palette from '@theme/Palette';
import Shadows from '@theme/Shadows';
import Theme from '@theme/Theme';
import Typography from '@theme/Typography';
// API 나오면 하드 코딩 된 부분 수정 예정

import coinImgUri, { CoinVariation } from '@utils/CoinVariations';
import { truncateLongWord } from '@utils/text';
import { QrCode } from 'phosphor-react-native';
import { useState } from 'react';
import { Pressable, ScrollView, useColorScheme } from 'react-native';
import styled from 'styled-components/native';
import { CardApiProps } from './Card.props';

const coinList: CoinVariation[] = ['ether', 'tether', 'solana'];

export interface WalletCardProps extends CardApiProps {
  balance: number;
  existingTokens: CoinVariation[];
}

const Card = ({ balance, address, name, existingTokens }: WalletCardProps) => {
  const [focus, setFocus] = useState(false);
  const { navigate } = useNavigation();
  const goToDetail = () => {
    // navigate();
  };

  return (
    <Pressable
      onPress={goToDetail}
      onPressIn={() => setFocus(true)}
      onPressOut={() => setFocus(false)}
    >
      <Container focus={focus}>
        <Header>
          <ScrollView horizontal>
            {existingTokens.map((coin) => (
              <Sep>
                <Coin uri={coinImgUri[coin]} />
              </Sep>
            ))}
          </ScrollView>
          <ICChip>
            <QrCode color={useColorScheme() === 'dark' ? Color.borderColor.dark : 'white'} />
          </ICChip>
        </Header>
        <Body>
          <Balance size="h2" weight="bold">
            $ {balance}
          </Balance>
          <Name size="body3" weight="regular">
            {name}
          </Name>
        </Body>
        <Bottom>
          <Balance size="body3" weight="bold">
            CARD ID
          </Balance>
          <Name size="body3" weight="regular">
            {truncateLongWord(address, 9)}
          </Name>
        </Bottom>
      </Container>
    </Pressable>
  );
};

const Sep = styled.View`
  margin-right: -10px;
`;

const Container = styled.View<{ focus: boolean }>`
  padding: 20px 10px 10px;
  width: 160px;
  height: 253px;
  border-radius: 10px;
  background-color: ${({ theme, focus }) => (focus ? Palette.primary : theme.cardColor)};
  justify-content: space-between;
  box-shadow: ${Shadows.common};
`;

const Body = styled.View``;
const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const Bottom = styled.View``;
const Balance = styled(Typography)``;
const Name = styled(Typography)``;

const ICChip = styled.View`
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.mainBgColor};
  background-color: gold;
  width: 33px;
  height: 44px;
  border-radius: 6px;
`;

export default Card;
