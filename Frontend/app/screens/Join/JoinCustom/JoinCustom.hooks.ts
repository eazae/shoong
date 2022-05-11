import { join } from '@services/api/user/userAPI';
import { IJoin, JoinRequestProps } from '../Join.props';

export const submit = async (data: IJoin) => {
  const {
    email: user_email,
    nickName: user_nickname,
    passWord: user_password,
    phoneNumber: user_phone_number,
  } = data;
  const body: JoinRequestProps = {
    user_email,
    user_nickname,
    user_password,
    user_phone_number,
  };
  return join(body);
};
