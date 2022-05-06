import { ETH_HTTP_PROVIDER } from '@env';
// ETH (이더리움)
import Web3 from 'web3';
// SOL (솔라나)
import * as solanaWeb3 from '@solana/web3.js';
//! 절대경로 적용 안됨 (이름 "assets"로는. "assetss" 이런식으로 바꾸면 잘 적용 되긴 함.. - 원인 파악 실패)
import { ethABI } from '../../../assets/abi/ethABI';
// import { EthABI } from '@assetss/abi/ethABI';

//* Remote Node Provider
// Using a remote node provider, like Alchemy (https://www.alchemyapi.io/supernode), is simple.
/* Client instance for ETH contract  */
export const createETHConnection = (contractAddress: string) => {
  const Web3Client = new Web3(
    Web3.givenProvider || new Web3.providers.HttpProvider(ETH_HTTP_PROVIDER)
  );
  return new Web3Client.eth.Contract(ethABI, contractAddress);
};
/* Client instance for SOL contract  */
export const createSOLConnection = () => {
  return new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('devnet'), 'confirmed');
};
