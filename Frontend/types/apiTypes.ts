export interface UserInfoType {
  cards: Array<CardTypes>;
  createdAt: string;
  deletedAt: string;
  id: string;
  updatedAt: string;
  user_email: string;
  user_nickname: string;
  user_password: string;
  user_phone_number: string;
}

export interface CardTypes {
  card_address: string;
  card_name: string;
  createdAt: string;
  deletedAt: string;
  id: string;
  updatedAt: string;
}
