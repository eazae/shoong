import Button from '@components/common/Button';
import ICChip from '@components/common/ICChip';
import CoinBadges from '@components/layout/CoinBadges';
import { contractAddr, getEthBalance, getTokenBalance } from '@services/web3/getBalance';
import Typography from '@theme/Typography';
import { truncateLongWord } from '@utils/text';
import { useColorScheme } from 'react-native';
import { useQuery } from 'react-query';
import {
  Body,
  Bottom,
  BtnLayOut,
  ButtonsLayOut,
  CardLayOut,
  Filter,
  Header,
  LayOut,
} from './CardLarge.styled';

export const defaultCardBg =
  'https://media.istockphoto.com/photos/sunset-at-seoul-city-skylinesouth-korea-picture-id621371796?b=1&k=20&m=621371796&s=170667a&w=0&h=6qfZvdg08Y9511NMWMGGh6gBqlncAybUQRmZ8i2PlRI=';
const cardBalance = 10;

interface CardLargeProps {
  card_address: string;
  card_profile_image: string;
  createdAt: number[];
}

const CardLarge = ({ card_address, card_profile_image, createdAt }: CardLargeProps) => {
  const { data: ethBalance } = useQuery(['balance'], () => getEthBalance(card_address));
  const { data: tetherBalance } = useQuery(['balance'], () =>
    getTokenBalance(card_address, contractAddr['tether'])
  );
  const { data: manaBalance } = useQuery(['balance'], () =>
    getTokenBalance(card_address, contractAddr['mana'])
  );
  const isDark = useColorScheme() === 'dark';
  const balances = { ethBalance, tetherBalance, manaBalance };
  const validDate = `${createdAt[0]}-${createdAt[1].toString().padStart(2, '0')}-${createdAt[2]
    .toString()
    .padStart(2, '0')}`;

  return (
    <LayOut>
      <CardLayOut blurRadius={12} source={{ uri: card_profile_image }}>
        <Filter isDark={isDark}>
          <Header>
            <CoinBadges {...balances} />
            <ICChip />
          </Header>
          <Body>
            <Typography size="h1" weight="bold">
              {cardBalance} 원
            </Typography>
            <Typography size="body2">{truncateLongWord(card_address, 18)}</Typography>
          </Body>
        </Filter>
        <Bottom>
          <Typography>VALID FROM</Typography>
          <Typography weight="regular">{validDate}</Typography>
        </Bottom>
      </CardLayOut>
      <ButtonsLayOut>
        <BtnLayOut>
          <Button title="송금하기" />
        </BtnLayOut>
        <BtnLayOut>
          <Button title="요청하기" />
        </BtnLayOut>
        <BtnLayOut>
          <Button title="충전하기" />
        </BtnLayOut>
      </ButtonsLayOut>
    </LayOut>
  );
};

export default CardLarge;
