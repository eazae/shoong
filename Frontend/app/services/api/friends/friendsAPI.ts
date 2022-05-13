import { JoinRequestProps } from '@screens/Join/Join.props';
import { setJWTValue } from '@utils/secureStore';
import instance from '../axios';

const COMMON = '/friends';

/* (임시) */
export const getFriendList = async (userId: string) => {
  const response = await instance.post(COMMON + '/list', {
    userId,
  });
  return response.data;
};

/* 전화번호로 유저 찾기 */
export const getUserWithPhone = async (phoneNumber: string) => {
  const response = await instance.get(COMMON + '/');
  return response.data;
};
