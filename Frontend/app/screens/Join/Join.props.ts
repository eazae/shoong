export interface IJoin {
  phoneNumber: string;
  email: string;
  passwordRepeat: string;
  passWord: string;
  nickName: string;
  verification: string;
}

export interface JoinRequestProps {
  user_email: string;
  user_nickname: string;
  user_password: string;
  user_phone_number: string;
}
