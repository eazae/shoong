export interface ICard extends CardApiProps {}

export interface CardApiProps {
  address: string;
  name: string;
  profileImage: string; // uri
}

export interface CardStorageProps {
  cardAddress: string;
  cardPvKey: string;
}
