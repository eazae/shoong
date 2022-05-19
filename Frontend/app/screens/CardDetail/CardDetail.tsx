import WalletListTitle from '@components/item/WalletListTitle';
import WalletTx from '@components/item/WalletTx';
import CardLarge from '@containers/CardLarge';
import WalletTxsEmpty from '@containers/WalletTxsEmpty';
import { WalletTxProps } from '@containers/WalletTxsEmpty/WalletTxsEmpty.props';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { getTransactionsByCard } from '@services/api/transactions/transactionsAPI';
import { getScreenHeight } from '@utils/native';
import { Pencil } from 'phosphor-react-native';
import { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useQuery } from 'react-query';
import styled from 'styled-components/native';
import { CoinPricesType } from 'types/apiTypes';

type CardDetailParamList = {
  CardDetail: {
    card_id: string;
    card_address: string;
    card_name: string;
    title: string;
    card_profile_image: string;
    createdAt: number[];
    prices: CoinPricesType;
  };
};

const CardDetail: React.FC<NativeStackScreenProps<CardDetailParamList, 'CardDetail'>> = ({
  navigation: { setOptions },
  route: {
    params: { title, card_id, card_address, card_profile_image, createdAt, prices },
  },
}) => {
  const { data } = useQuery<WalletTxProps[]>(['transactions', card_id], () =>
    getTransactionsByCard(card_id)
  );
  useEffect(() => {
    setOptions({
      title: title,
      headerRight: () => <Pencil color="white" />,
    });
  });
  return (
    <LayOut>
      <FlatList
        data={data!}
        ListHeaderComponent={
          <>
            <CardLarge
              card_name={title}
              prices={prices}
              card_address={card_address}
              card_profile_image={card_profile_image}
              createdAt={createdAt}
            />
            <WalletListTitle title="지난 송금 내역" />
          </>
        }
        renderItem={({ item }) => {
          return <WalletTx {...item} />;
        }}
        ListEmptyComponent={WalletTxsEmpty}
      />
    </LayOut>
  );
};

export default CardDetail;

const LayOut = styled.View`
  padding: 0px 20px;
  height: ${getScreenHeight()};
`;
