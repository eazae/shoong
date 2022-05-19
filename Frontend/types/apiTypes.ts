export interface UserInfoType extends UserInfoBaseType {
  cards: Array<CardType>;
  createdAt: string;
  deletedAt: string;
  followees: Array<FollowerType>;
  followers: Array<FollowerType>;
  id: string;
  updatedAt: string;
  user_email: string;
  // user_nickname: string;
  // user_phone_number: string;
  user_password: string;
}

export interface UserInfoBaseType {
  user_nickname: string;
  // user_password: string;
  user_phone_number: string;
  user_profile_image: string;
}

export interface CardType {
  card_address: string;
  card_name: string;
  createdAt: string;
  deletedAt: string;
  id: string;
  updatedAt: string;
}

export interface FriendType {
  user_nickname: string;
  user_phone_number: string;
  user_profile_image: string;
}

export interface UserSearchResultType {
  user_email: string;
  user_nickname: string;
  user_phone_number: string;
  // user_profile_image: string;
}

export interface FollowerType {
  followee: string;
  follower: string;
  id: string;
}
