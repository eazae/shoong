export interface ICard extends CardApiProps {}

export interface CardApiProps {
  address?: string;
  name: string;
  id: string;
}

export interface CardStorageProps {
  cardAddress: string;
  cardPvKey: string;
}
