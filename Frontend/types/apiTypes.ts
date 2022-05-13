export interface UserInfoType {
  cards: Array<CardType>;
  createdAt: string;
  deletedAt: string;
  id: string;
  updatedAt: string;
  user_email: string;
  user_nickname: string;
  user_password: string;
  user_phone_number: string;
}

export interface CardType {
  card_address: string;
  card_name: string;
  createdAt: string;
  deletedAt: string;
  id: string;
  updatedAt: string;
}

export interface FriendsListType {
  list: Array<FriendType>;
}

export interface FriendType {
  user_nickname: string;
  user_phone_number: string;
  user_image: string;
}
