import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import * as solanaWeb3 from '@solana/web3.js';

const MAINNET = 'https://mainnet.infura.io/v3/43b62be4d86946688b1fb5b4bf4df6c9';
const GOERNET = 'https://goerli.infura.io/v3/43b62be4d86946688b1fb5b4bf4df6c9';

const web3 = new Web3(MAINNET);

// main
export const contractAddr = {
  mana: '0x0F5D2fB29fb7d3CFeE444a200298f468908cC942',
  tether: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
};

export const getEthBalance = async (address: string) => {
  // ether 잔액 조회
  const ethBalance = await web3.eth.getBalance(address);
  const convertEth = await web3.utils.fromWei(ethBalance.toString(), 'ether');
  // return Number(convertEth);
  return 0.02;
};

export const getTokenBalance = async (address: string, contractAddr: string) => {
  // 토큰 잔액 조회
  let minABI: AbiItem | AbiItem[] = [
    // balanceOf
    {
      constant: true,
      inputs: [{ name: '_owner', type: 'address' }],
      name: 'balanceOf',
      outputs: [{ name: 'balance', type: 'uint256' }],
      type: 'function',
    },
  ];

  // 토큰 잔액조회
  const contractInstance = new web3.eth.Contract(minABI, contractAddr);
  const contractMethod = await contractInstance.methods.balanceOf(address).call();

  let convertToken;

  convertToken = web3.utils.fromWei(contractMethod.toString(), 'ether');
  return Number(convertToken);
  // return 12
};

export const getSolanaBalance = async (address: string) => {
  const solanaAddress = new solanaWeb3.PublicKey(address);
  const solana = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('devnet'), 'confirmed');

  const balance = await solana.getBalance(solanaAddress);
  console.log(`잔액조회 ${balance / 1000000000}`);
  return balance / 1000000000;
};
