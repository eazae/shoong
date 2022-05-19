import axios from 'axios';
import { CoinPriceTypeVariations } from 'types/apiTypes';

export const getPrice = async (coin: CoinPriceTypeVariations, currency = 'krw') => {
  const URL = `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=${currency}`;

  const result = await axios(URL);
  const { data } = result;
  const res = data[coin].krw;
  return res;
};
