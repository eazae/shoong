import instance from '../axios';

const COMMON = '/user';

export const getCardsFromSHOONG = async () => {
  const response = await instance.post(COMMON + '/loadCard');
  return response.data;
};
