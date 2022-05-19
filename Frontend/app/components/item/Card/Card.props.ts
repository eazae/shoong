import { CoinPricesType } from 'types/apiTypes';

export interface ICard extends CardApiProps {
  prices?: CoinPricesType;
}

export interface CardApiProps {
  id?: string;
  card_address: string;
  card_name: string;
  card_profile_image: string; // uri
  createdAt?: number[];
}

export interface CardStorageProps {
  cardAddress: string;
  cardPvKey: string;
}
