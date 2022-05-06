import { ETH_HTTP_PROVIDER } from '@env';
// ETH (이더리움)
import Web3 from 'web3';
// import { ethABI } from 'assets/abi/ethABI';
// SOL ()
import * as solanaWeb3 from '@solana/web3.js';

//* Remote Node Provider
// Using a remote node provider, like Alchemy (https://www.alchemyapi.io/supernode), is simple.
/* Client instance for ETH contract  */
export const getETHContract = (contractAddress: string) => {
  const Web3Client = new Web3(
    Web3.givenProvider || new Web3.providers.HttpProvider(ETH_HTTP_PROVIDER)
  );
  return new Web3Client.eth.Contract(
    [
      {
        constant: true,
        inputs: [{ name: '_owner', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ name: 'balance', type: 'uint256' }],
        type: 'function',
      },
    ],
    contractAddress
  );
};
/* Client instance for SOL contract  */
export const getSOLClient = () => {
  return new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('devnet'), 'confirmed');
};
