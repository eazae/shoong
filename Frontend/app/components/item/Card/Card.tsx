import Coin from '@components/common/Coin';
import { useNavigation } from '@react-navigation/native';
import Palette from '@theme/Palette';
import Typography from '@theme/Typography';
// API 나오면 하드 코딩 된 부분 수정 예정

import coinImgUri, { CoinVariation } from '@utils/CoinVariations';
import { truncateLongWord } from '@utils/text';
import { useState } from 'react';
import { Pressable, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { CardApiProps } from './Card.props';

const coinList: CoinVariation[] = ['ether', 'tether', 'solana'];

export interface WalletCardProps extends CardApiProps {
  balance: number;
  existingTokens: CoinVariation[];
}

const Card = ({ balance, address, name, id, existingTokens }: WalletCardProps) => {
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
            {truncateLongWord(id, 9)}
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
  padding: 15px 10px;
  width: 160px;
  height: 253px;
  border-radius: 10px;
  background-color: ${({ theme, focus }) => (focus ? Palette.primary : theme.cardColor)};
  justify-content: space-between;
`;

const Body = styled.View``;
const Header = styled.View``;
const Bottom = styled.View``;
const Balance = styled(Typography)``;
const Name = styled(Typography)``;

export default Card;
