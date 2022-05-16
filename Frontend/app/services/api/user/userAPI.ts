import { JoinRequestProps } from '@screens/Join/Join.props';
import { setJWTValue } from '@utils/secureStore';
import { UserInfoBaseType, UserInfoType } from 'types/apiTypes';
import instance from '../axios';

// 공통되는 경로는 다음과 같이 별도로 정의해둠
const COMMON = '/user';

/* 로그인 (임시) */
export const login = async (userId: string, userPw: string) => {
  const response = await instance.post(COMMON + '/login', {
    userId,
    userPw,
  });
  if (response.data) {
    // save JWT token
    setJWTValue(response.data.accessToken);
  }
  return response.data;
};

export const join = async (body: JoinRequestProps) => {
  const response = await instance.post(COMMON + '/join', body);
  return response;
};

/* (로그인된) 사용자 정보 요청 */
export const getUserInfo = async () => {
  const response = await instance.get(COMMON + '/getUser');
  return response;
};

/* 사용자 정보 수정 */
export const updateUserInfo = async (userInfo: UserInfoBaseType) => {
  const response = await instance.put(COMMON + '/update', userInfo);
};
