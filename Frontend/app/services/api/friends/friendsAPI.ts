import { FriendType } from 'types/apiTypes';
import instance from '../axios';

const COMMON = '/user';

/* (임시) */
export const getFriendList = async () => {
  const response = await instance.post(COMMON + '/loadfriend');
  console.log(response);
  return response.data;
};

/* 전화번호로 유저 찾기 */
export const getUserWithPhone = async (phoneNumber: string) => {
  const response = await instance.get(COMMON + '/');
  return response.data;
};

/* 닉네임으로 유저 찾기 */
/* QR코드로 유저 찾기 */

/* 친구 추가하기 */
export const requestAddFriend = async (account: FriendType) => {
  const response = await instance.post(COMMON + '/makefriend', account);
  return response;
};

/* 친구 삭제하기 */
export const requestDeleteFriend = async (user_nickname: string) => {
  const response = await instance.post(COMMON + '/deletefriend', user_nickname);
  return response;
};
