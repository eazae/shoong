import { getJWTValue } from '@utils/secureStore';
import instance from '../axios';

const COMMON = '/transaction';

export const getAllTransactions = async () => {
  const JWT = await getJWTValue();
  const response = await instance.get(COMMON + `/getAll?jwt=${JWT}`);

  return response.data;
};

export const getTransactionsByCard = async (card_id: string) => {
  const JWT = await getJWTValue();
  const response = await instance.get(COMMON + `/getByCard?card_id=${card_id}&jwt=${JWT}`);

  return response.data;
};
