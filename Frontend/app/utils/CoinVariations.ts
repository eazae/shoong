export type CoinVariation = 'ether' | 'tether' | 'solana' | 'mana';

export type CoinImgUriType = Record<CoinVariation, string>;

const coinImgUri: CoinImgUriType = {
  ether: 'https://static.coinpaprika.com/coin/eth-ethereum/logo.png?rev=112353',
  tether: 'https://static.coinpaprika.com/coin/usdt-tether/logo.png?rev=115567',
  solana: 'https://static.coinpaprika.com/coin/sol-solana/logo.png?rev=10632791',
  mana: 'https://static.coinpaprika.com/coin/mana-decentraland/logo.png?rev=115871',
};

export default coinImgUri;
