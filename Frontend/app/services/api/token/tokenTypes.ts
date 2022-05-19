export const coins = ['ethereum', 'tether', 'solana', 'decentraland'] as const;
export type CoinType = typeof coins[number];

export const CoinIconUri: Record<CoinType, string> = {
  ethereum: 'https://static.coinpaprika.com/coin/eth-ethereum/logo.png?rev=112353',
  tether: 'https://static.coinpaprika.com/coin/usdt-tether/logo.png?rev=115567',
  solana: 'https://static.coinpaprika.com/coin/sol-solana/logo.png?rev=10632791',
  decentraland: 'https://static.coinpaprika.com/coin/mana-decentraland/logo.png?rev=115871',
};

export const TokenSymbol: Record<string, string> = {
  ethereum: 'ETH',
  tether: 'USDT',
  solana: 'SOL',
  decentraland: 'MANA',
};

export const TokenName: Record<string, string> = {
  ethereum: 'Ethereum',
  tether: 'Tether',
  solana: 'Solana',
  decentraland: 'Decentraland',
};
