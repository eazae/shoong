import { CardApiProps } from '@components/item/Card/Card.props';
import instance from '../axios';

const COMMON = '/user';

export const getCardsFromSHOONG = async () => {
  const response = await instance.post(COMMON + '/loadCard');
  return response.data;
};

export const deleteCardFromSHOONG = async (data: CardApiProps) => {
  const response = await instance.post(COMMON + '/deleteCard', data);
  return response;
};
