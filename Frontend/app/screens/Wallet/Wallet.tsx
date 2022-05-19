import React from 'react';
import styled from 'styled-components/native';
import { WALLET_HEADER_HEIGHT } from '@containers/WalletHeader/WalletHeader';
import WalletCards from '@containers/WalletCards';
import WalletListTitle from '@components/item/WalletListTitle';
import { WalletTxProps } from '@containers/WalletTxsEmpty/WalletTxsEmpty.props';
import WalletTx from '@components/item/WalletTx';
import { FlatList, TouchableOpacity } from 'react-native';
import WalletTxsEmpty from '@containers/WalletTxsEmpty';
import { getScreenHeight } from '@utils/native';
import { useQuery } from 'react-query';
import { getAllTransactions } from '@services/api/transactions/transactionsAPI';
import { CoinPricesType, CoinPriceType } from 'types/apiTypes';
import { getPrice } from '@services/web3/getPrice';
import GasWeathers from '@containers/GasWeathers';

const Wallet = () => {
  const { data: decentraland } = useQuery<CoinPriceType>(['coinPrice', 'decentraland'], () =>
    getPrice('decentraland')
  );
  const { data: ethereum } = useQuery<CoinPriceType>(['coinPrice', 'ethereum'], () =>
    getPrice('ethereum')
  );
  const { data: tether } = useQuery<CoinPriceType>(['coinPrice', 'tether'], () =>
    getPrice('tether')
  );
  const { data: solana } = useQuery<CoinPriceType>(['coinPrice', 'solana'], () =>
    getPrice('solana')
  );
  const { data } = useQuery<WalletTxProps[]>(['transactions', 'all'], getAllTransactions);
  const prices: CoinPricesType = {
    decentraland,
    ethereum,
    tether,
    solana,
  };
  return (
    <WalletLayOut>
      <FlatList
        data={data}
        ListHeaderComponent={
          <>
            <HeaderArea />
            <WalletListTitle title="카드" />
            <WalletCards {...prices} />
            <WalletListTitle title="코인별 시세 현황" />
            <GasWeathers {...prices} />
            <WalletListTitle title="지난 송금 내역" />
          </>
        }
        ListEmptyComponent={WalletTxsEmpty}
        ItemSeparatorComponent={Sep}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: tx }) => <WalletTx {...tx} />}
      />
    </WalletLayOut>
  );
};

const WalletLayOut = styled.View`
  padding: 0px 20px 20px;
  height: ${getScreenHeight()};
`;

const HeaderArea = styled.View`
  height: ${WALLET_HEADER_HEIGHT};
`;

const Sep = styled.View`
  height: 10px;
`;

export default Wallet;
