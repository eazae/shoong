import Button from '@components/common/Button';
import ICChip from '@components/common/ICChip';
import Modal from '@components/common/Modal/Modal';
import CoinBadges from '@components/layout/CoinBadges';
import { useNavigation } from '@react-navigation/native';
import { deleteCardFromSHOONG } from '@services/api/card/cardAPI';
import { contractAddr, getEthBalance, getTokenBalance } from '@services/web3/getBalance';
import Color from '@theme/Color';
import Typography from '@theme/Typography';
import Size from '@theme/Typography/Size';
import { truncateLongWord } from '@utils/text';
import { Clipboard, Trash } from 'phosphor-react-native';
import { useState } from 'react';
import { useColorScheme, Clipboard as Copy, Alert } from 'react-native';
import { useQuery, useQueryClient } from 'react-query';
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
  card_name: string;
  prices: CoinPricesType;
  card_address: string;
  card_profile_image: string;
  createdAt: number[];
}

const CardLarge = ({
  card_name,
  card_address,
  card_profile_image,
  createdAt,
  prices,
}: CardLargeProps) => {
  const queryClient = useQueryClient();
  const { data: ethBalance } = useQuery(['balance', 'ether', card_address], () =>
    getEthBalance(card_address)
  );
  const { data: tetherBalance } = useQuery(['balance', 'tether', card_address], () =>
    getTokenBalance(card_address, contractAddr['tether'])
  );
  const { data: manaBalance } = useQuery(['balance', 'mana', card_address], () =>
    getTokenBalance(card_address, contractAddr['mana'])
  );
  const { navigate } = useNavigation();
  const [addrPressed, setAddrPressed] = useState(false);
  const [isCopyModalOn, setIsCopyModalOn] = useState(false);
  const [isDeleteModalOn, setIsDeleteModalOn] = useState(false);
  const isDark = useColorScheme() === 'dark';
  const balances = { ethBalance, tetherBalance, manaBalance };
  const validDate = `${createdAt[0]}-${createdAt[1].toString().padStart(2, '0')}-${createdAt[2]
    .toString()
    .padStart(2, '0')}`;

  const onAddrPress = () => {
    setIsCopyModalOn(true);
  };
  const onCopyModalClose = () => {
    Copy.setString(card_address);
    setIsCopyModalOn(false);
  };

  const onDeleteModalClose = async () => {
    await deleteCardFromSHOONG({ card_address, card_name, card_profile_image })
      .then(() => Alert.alert('완료', '카드와 연결을 해제했습니다.'))
      .catch((err) => alert(err));
    await queryClient.refetchQueries('cards');
    navigate('Tabs', { screen: 'Wallet' });
    setIsDeleteModalOn(false);
  };

  const totalBalance = // @ts-ignore
    manaBalance * prices?.decentraland + // @ts-ignore
    ethBalance * prices?.ethereum + // @ts-ignore
    tetherBalance * prices?.tether;

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
              {totalBalance.toLocaleString()} 원
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
            <>
              <Modal
                modalTitle="카드 주소"
                buttonTitle="복사하고 닫기"
                buttonIcon={<Clipboard color={Color.textColor.light} />}
                content={card_address}
                modalVisible={isCopyModalOn}
                onModalClosed={onCopyModalClose}
              />
              <Modal
                modalTitle="꼭 읽어주세요!"
                content={`카드 연결을 해제합니다.\n\n카드안의 자산이 사라지는 것은 아니지만 슝이 더 이상 송금을 도와드릴 수 없기 때문에 반드시 비어있는 카드만 해제하시길 추천드려요`}
                buttonTitle="그래도 정말 지우시겠어요?"
                modalVisible={isDeleteModalOn}
                onModalClosed={onDeleteModalClose}
              />
            </>
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
          <Button
            onPress={() => setIsDeleteModalOn(true)}
            title="연결해제"
            variant="error"
            icon={<Trash color={Color.textColor.light} size={Size.body2} />}
          />
        </BtnLayOut>
      </ButtonsLayOut>
    </LayOut>
  );
};

export default CardLarge;
