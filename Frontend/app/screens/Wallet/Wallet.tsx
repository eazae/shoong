import React from 'react';
import styled from 'styled-components/native';
import { WALLET_HEADER_HEIGHT } from '@containers/WalletHeader/WalletHeader';
import WalletCards from '@containers/WalletCards';
// import GasWeather from '@containers/WalletCards';
// import PastSends from '@containers/PastSends';
import WalletListTitle from '@components/item/WalletListTitle';

const Wallet = () => {
  return (
    <WalletLayOut>
      <HeaderArea />
      <WalletListTitle title="카드" />
      <WalletCards />
      <WalletListTitle title="가스비 기상 현황" />
      {/* <GasWeather /> */}
      <WalletListTitle title="지난 송금 내역" />
      {/* <PastSends /> */}
    </WalletLayOut>
  );
};

const WalletLayOut = styled.ScrollView`
  padding: 0px 20px 20px;
`;

const HeaderArea = styled.View`
  height: ${WALLET_HEADER_HEIGHT};
`;

export default Wallet;
