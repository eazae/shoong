import { JoinRequestProps } from '@screens/Join/Join.props';
import { ILogin } from '@screens/Login/Login.props';
import instance from '../axios';

// 공통되는 경로는 다음과 같이 별도로 정의해둠
const COMMON = '/user';

export const login = async ({ email: user_email, passWord: user_password }: ILogin) => {
  const response = await instance.post(COMMON + '/login', {
    user_email,
    user_password,
  });
  return response;
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
