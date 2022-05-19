import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { WALLET_HEADER_HEIGHT } from '@containers/WalletHeader/WalletHeader';
import WalletCards from '@containers/WalletCards';
import WalletListTitle from '@components/item/WalletListTitle';
import { WalletTxProps } from '@containers/WalletTxsEmpty/WalletTxsEmpty.props';
import WalletTx from '@components/item/WalletTx';
import { FlatList } from 'react-native';
import WalletTxsEmpty from '@containers/WalletTxsEmpty';
import { getScreenHeight } from '@utils/native';
import { useQuery, useQueryClient } from 'react-query';
import { getAllTransactions } from '@services/api/transactions/transactionsAPI';
import { CoinPricesType, CoinPriceType } from 'types/apiTypes';
import { getPrice } from '@services/web3/getPrice';
import GasWeathers from '@containers/GasWeathers';

const Wallet = () => {
  const queryClient = useQueryClient();
  const [prices, setPrices] = useState<CoinPricesType>();
  const {
    isLoading: manaPriceIsLoading,
    isRefetching: manaPriceRefetching,
    data: decentraland,
  } = useQuery<CoinPriceType>(['coinPrice', 'decentraland'], () => getPrice('decentraland'), {
    refetchInterval: 50000,
  });
  const {
    isLoading: ethPriceIsLoading,
    isRefetching: ethPriceRefetching,
    data: ethereum,
  } = useQuery<CoinPriceType>(['coinPrice', 'ethereum'], () => getPrice('ethereum'), {
    refetchInterval: 50000,
  });
  const {
    isLoading: tetherPriceIsLoading,
    isRefetching: tetherPriceRefetching,
    data: tether,
  } = useQuery<CoinPriceType>(['coinPrice', 'tether'], () => getPrice('tether'), {
    refetchInterval: 50000,
  });
  const {
    isLoading: solanaPriceIsLoading,
    isRefetching: solanaPriceRefetching,
    data: solana,
  } = useQuery<CoinPriceType>(['coinPrice', 'solana'], () => getPrice('solana'), {
    refetchInterval: 50000,
  });
  const isLoading =
    manaPriceIsLoading || ethPriceIsLoading || tetherPriceIsLoading || solanaPriceIsLoading;
  const isRefetching =
    manaPriceRefetching || ethPriceRefetching || tetherPriceRefetching || solanaPriceRefetching;
  const { data } = useQuery<WalletTxProps[]>(['transactions', 'all'], getAllTransactions);

  useEffect(() => {
    setPrices({
      decentraland,
      ethereum,
      tether,
      solana,
    });
  }, [isLoading]);

  return (
    <WalletLayOut>
      {isLoading ? null : (
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
          refreshing={isRefetching}
          onRefresh={() => queryClient.refetchQueries(['balance', 'coinPrice'])}
          renderItem={({ item: tx }) => <WalletTx {...tx} />}
        />
      )}
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
