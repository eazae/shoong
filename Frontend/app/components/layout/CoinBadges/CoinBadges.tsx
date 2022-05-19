import Coin from '@components/common/Coin';
import { coinImgUri } from '@utils/CoinVariations';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

interface ICoinBadges {
  ethBalance?: number;
  tetherBalance?: number;
  manaBalance?: number;
  solanaBalance?: number;
}

const CoinBadges = ({ ethBalance, tetherBalance, manaBalance, solanaBalance }: ICoinBadges) => {
  return (
    <ScrollView horizontal>
      {ethBalance ? (
        <Sep>
          <Coin uri={coinImgUri['ethereum']} />
        </Sep>
      ) : null}
      {tetherBalance ? (
        <Sep>
          <Coin uri={coinImgUri['tether']} />
        </Sep>
      ) : null}
      {manaBalance ? (
        <Sep>
          <Coin uri={coinImgUri['decentraland']} />
        </Sep>
      ) : null}
      {solanaBalance ? (
        <Sep>
          <Coin uri={coinImgUri['solana']} />
        </Sep>
      ) : null}
    </ScrollView>
  );
};

export default CoinBadges;

const Sep = styled.View`
  margin-right: -10px;
`;
