import * as solanaWeb3 from '@solana/web3.js';
import { getSOLClient } from './instance';

// 잔액조회하기(테스트 devnet)
export const getSolanaBalance = async (publicKey: string) => {
  const solanaClient = getSOLClient();
  const address = new solanaWeb3.PublicKey(publicKey);

  const balance = await solanaClient.getBalance(address);
  console.log('잔액조회', balance);

  return balance;
};
