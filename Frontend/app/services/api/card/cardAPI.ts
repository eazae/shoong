import instance from '../axios';

const COMMON = '/user';

export const getCards = async () => {
  const response = await instance.post(COMMON + '/loadCard');
  console.log(response.data);
  return response.data;
};
