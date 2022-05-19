import Button from '@components/common/Button';
import ICChip from '@components/common/ICChip';
import Modal from '@components/common/Modal/Modal';
import CoinBadges from '@components/layout/CoinBadges';
import { contractAddr, getEthBalance, getTokenBalance } from '@services/web3/getBalance';
import Color from '@theme/Color';
import Typography from '@theme/Typography';
import { truncateLongWord } from '@utils/text';
import { Clipboard } from 'phosphor-react-native';
import { useState } from 'react';
import { useColorScheme, Clipboard as Copy } from 'react-native';
import { useQuery } from 'react-query';
import { CoinPricesType } from 'types/apiTypes';
import {
  Address,
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

interface CardLargeProps {
  prices: CoinPricesType;
  card_address: string;
  card_profile_image: string;
  createdAt: number[];
}

const CardLarge = ({ card_address, card_profile_image, createdAt, prices }: CardLargeProps) => {
  const { data: ethBalance } = useQuery(['balance', 'ether', card_address], () =>
    getEthBalance(card_address)
  );
  const { data: tetherBalance } = useQuery(['balance', 'tether', card_address], () =>
    getTokenBalance(card_address, contractAddr['tether'])
  );
  const { data: manaBalance } = useQuery(['balance', 'mana', card_address], () =>
    getTokenBalance(card_address, contractAddr['mana'])
  );
  const [addrPressed, setAddrPressed] = useState(false);
  const [modalOn, setModalOn] = useState(false);
  const isDark = useColorScheme() === 'dark';
  const balances = { ethBalance, tetherBalance, manaBalance };
  const validDate = `${createdAt[0]}-${createdAt[1].toString().padStart(2, '0')}-${createdAt[2]
    .toString()
    .padStart(2, '0')}`;

  const onAddrPress = () => {
    setModalOn(true);
  };
  const onModalClose = () => {
    Copy.setString(card_address);
    setModalOn(false);
  };
  const totalBalance = // @ts-ignore
    manaBalance * prices?.decentraland.krw + // @ts-ignore
    ethBalance * prices?.ethereum?.krw + // @ts-ignore
    tetherBalance * prices?.tether.krw;

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
              {totalBalance} 원
            </Typography>
            <Address
              onPress={onAddrPress}
              onPressIn={() => setAddrPressed(true)}
              onPressOut={() => setAddrPressed(false)}
              isPressed={addrPressed}
              isDark={isDark}
            >
              <Typography size="body2">{truncateLongWord(card_address, 18)}</Typography>
            </Address>
            <Modal
              modalTitle="카드 주소"
              buttonTitle="복사하고 닫기"
              buttonIcon={<Clipboard color={Color.textColor.light} />}
              content={card_address}
              modalVisible={modalOn}
              onModalClosed={onModalClose}
            />
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
