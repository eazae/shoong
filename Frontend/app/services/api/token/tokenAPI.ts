import {
  contractAddr,
  getEthBalance,
  getTokenBalance,
  getSolanaBalance,
} from '@services/web3/getBalance';
// import { getSolanaBalance } from '@services/web3/solana';
import axios from 'axios';
import { Alert } from 'react-native';
import { CardType } from 'types/apiTypes';
import { CoinType } from '@services/api/token/tokenTypes';

export const getCoinPrice = async (coin: CoinType, currency = 'krw') => {
  const URL = `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=${currency}`;

  const result = await axios(URL);
  // const { data } = result;

  return result.data[coin].krw;
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
