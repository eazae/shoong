import { getJWTValue } from '@utils/secureStore';
import instance from '../axios';
import { isJWTValid } from '../user/userAPI';

const COMMON = '/transaction';

export const getAllTransactions = async () => {
  const JWT = await getJWTValue();
  const response = await instance.get(COMMON + `/getAll?jwt=${JWT}`);

  return response.data;
};
