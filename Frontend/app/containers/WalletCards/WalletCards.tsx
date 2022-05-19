import Card from '@components/item/Card';
import { CardApiProps, ICard } from '@components/item/Card/Card.props';
import HFlatList from '@components/layout/HFlatList';
import { createCard } from '@containers/SecurityCard/SecurityCardHooks';
import { getCardsFromSHOONG } from '@services/api/card/cardAPI';
import Palette from '@theme/Palette';
import Shadows from '@theme/Shadows';
import Typography from '@theme/Typography';
import { Plus } from 'phosphor-react-native';
import { useState } from 'react';
import { Pressable } from 'react-native';
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters, useQuery } from 'react-query';
import { useTheme } from 'styled-components';
import styled from 'styled-components/native';
import { CoinPricesType } from 'types/apiTypes';

const WalletCards = (prices: CoinPricesType) => {
  const { data: cardData, refetch } = useQuery<CardApiProps[]>(['cards'], getCardsFromSHOONG);

  return (
    <HFlatList
      ListFooterComponent={() => <AddCard refetch={refetch} />}
      data={cardData?.map((data) => ({ ...data, prices }))}
      margin={5}
      renderItem={({ item }) => {
        return <Card {...item} />;
      }}
    />
  );
};

interface AddCardProps {
  refetch: <TPageData>(
    options?: RefetchOptions & RefetchQueryFilters<TPageData>
  ) => Promise<QueryObserverResult<any, any>>;
}

const AddCard = ({ refetch }: AddCardProps) => {
  const [focus, setFocus] = useState(false);

  return (
    <Pressable
      onPress={async () => createCard().then(() => refetch())}
      onPressIn={() => setFocus(true)}
      onPressOut={() => setFocus(false)}
    >
      <Container focus={focus}>
        {
          // @ts-ignore
          <Plus color={useTheme().textColor} size={54} />
        }
        <Typography size="body3">카드 추가하기</Typography>
      </Container>
    </Pressable>
  );
};

const Container = styled.View<{ focus: boolean }>`
  opacity: 0.8;
  margin-left: ${12}px;
  background-color: ${({ theme, focus }) => (focus ? Palette.primary : theme.cardColor)};
  padding: 20px;
  width: 160px;
  height: 253px;
  border-radius: 10px;
  justify-content: space-around;
  align-items: center;
  box-shadow: ${Shadows.common};
  overflow: hidden;
`;

export default WalletCards;
