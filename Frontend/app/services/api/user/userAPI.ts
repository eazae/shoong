import { JoinRequestProps } from '@screens/Join/Join.props';
import { ILogin } from '@screens/Login/Login.props';
import { setJWTValue } from '@utils/secureStore';
import { Alert } from 'react-native';
import { UserInfoBaseType } from 'types/apiTypes';
import instance from '../axios';

// 공통되는 경로는 다음과 같이 별도로 정의해둠
const COMMON = '/user';

export const login = async ({ email: user_email, passWord: user_password }: ILogin) => {
  const response = await instance.post('/login', {
    user_email,
    user_password,
  });
  return response;
  //   .then((res) => {
  //     setJWTValue(res.data);
  //   })
  //   .catch(() =>
  //     Alert.alert('로그인이 되지 않아요', '아이디와 비밀번호를 다시 한 번 확인해주세요')
  //   );
  // return responses;
};

export const join = async (body: JoinRequestProps) => {
  const response = await instance
    .post(COMMON + '/join', body)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  return response;
};

export const isJWTValid = async (jwt: string) => {
  const response = await instance.get(COMMON + `/JWT?jwt=${jwt}`);
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
  return response;
};

/* 사용자 비밀번호 수정 */
export const updateUserPassword = async (user_password: string) => {
  const response = await instance.put(COMMON + '/updatepassword', { user_password });
  return response;
};
