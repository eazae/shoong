import {
  contractAddr,
  getEthBalance,
  getTokenBalance,
  getSolanaBalance,
} from '@services/web3/getBalance';
// import { getSolanaBalance } from '@services/web3/solana';
import axios from 'axios';
import { CardType } from 'types/apiTypes';

// type CoinType = 'ethereum' | 'tether' | 'solana' | 'decentraland';

export const coins = ['ethereum', 'tether', 'solana', 'decentraland'] as const;
export type CoinType = typeof coins[number];

export const getCoinPrice = async (coin: CoinType, currency = 'krw') => {
  const URL = `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=${currency}`;

  const result = await axios(URL);
  const { data } = result;

  return data;
};

export const getTotalKRWBalance = async (wallet: Array<CardType>) => {
  let balance: number = 0;

  wallet.forEach(async (card) => {
    // Ethereum
    balance += await getEthBalance(card.card_address);
    // Solana
    balance += await getSolanaBalance(card.card_address);
    // Tether
    balance += await getTokenBalance(card.card_address, contractAddr.tether);
    // Decentralized
    balance += await getTokenBalance(card.card_address, contractAddr.mana);
  });

  return balance;
};
