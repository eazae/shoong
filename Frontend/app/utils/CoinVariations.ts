import { CoinPriceTypeVariations } from 'types/apiTypes';

export type CoinImgUriType = Record<CoinPriceTypeVariations, string>;

export const coinImgUri: CoinImgUriType = {
  ethereum: 'https://static.coinpaprika.com/coin/eth-ethereum/logo.png?rev=112353',
  tether: 'https://static.coinpaprika.com/coin/usdt-tether/logo.png?rev=115567',
  solana: 'https://static.coinpaprika.com/coin/sol-solana/logo.png?rev=10632791',
  decentraland: 'https://static.coinpaprika.com/coin/mana-decentraland/logo.png?rev=115871',
};
