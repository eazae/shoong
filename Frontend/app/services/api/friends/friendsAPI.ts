import { FriendType } from 'types/apiTypes';
import instance from '../axios';

const COMMON = '/user';

/* 친구 목록 */
export const getFriendList = async () => {
  const response = await instance.post(COMMON + '/loadfriend');
  return response.data;
};

/* 닉네임으로 유저 찾기 */
export const getUserWithNickname = async (user_nickname: string) => {
  const response = await instance.post(COMMON + '/getByNickName', { user_nickname });
  return response;
};

/* 전화번호로 유저 찾기 */
export const getUserWithPhone = async (user_phone: string) => {
  const response = await instance.post(COMMON + '/getByPhone', { user_phone });
  return response;
};

/* QR코드로 유저 찾기 */

/* 친구 추가하기 */
export const requestAddFriend = async (account: FriendType) => {
  const response = await instance.post(COMMON + '/makefriend', account);
  return response;
};

/* 친구 삭제하기 */
export const requestDeleteFriend = async (user_nickname: string) => {
  const response = await instance.post(COMMON + '/deletefriend', { user_nickname });
  return response;
};
