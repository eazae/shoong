import React from 'react';
import styled from 'styled-components/native';
import { WALLET_HEADER_HEIGHT } from '@containers/WalletHeader/WalletHeader';
import WalletCards from '@containers/WalletCards';
import GasWeather from '@containers/GasWeathers';
import WalletListTitle from '@components/item/WalletListTitle';
import { txData } from '@containers/WalletTxsEmpty/WalletTxsEmpty.props';
import WalletTx from '@components/item/WalletTx';
import { FlatList } from 'react-native';
import WalletTxsEmpty from '@containers/WalletTxsEmpty';
import { getScreenHeight } from '@utils/native';

const Wallet = () => {
  return (
    <WalletLayOut>
      <FlatList
        data={txData}
        ListHeaderComponent={
          <>
            <HeaderArea />
            <WalletListTitle title="카드" />
            <WalletCards />
            <WalletListTitle title="가스비 기상 현황" />
            <GasWeather />
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
