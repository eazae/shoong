import axios from 'axios';
import Web3 from 'web3';

const API_KEY = 'UM43AKX746A62RU5YFTUGQPX23PD3INAYG';
const URL = `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${API_KEY}`;

export const setGas = async () => {
  const result = await axios(URL);
  const { SafeGasPrice, ProposeGasPrice, FastGasPrice, suggestBaseFee } = result.data.result;
  console.log(result.data);
  console.log(`low gas fee ${SafeGasPrice} Gwei`);
  console.log(`recommend gas fee ${ProposeGasPrice} Gwei`);
  console.log(`fast gas fee ${FastGasPrice} Gwei`);
  return [SafeGasPrice, ProposeGasPrice, FastGasPrice];
};
