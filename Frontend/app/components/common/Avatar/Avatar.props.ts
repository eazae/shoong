export interface IAvatar extends IAvatarImage {
  hasAlarm?: boolean;
  isLoading?: boolean;
  uri?: string;
}

export interface IAvatarImage {
  size?: 'large' | 'medium' | 'small' | 'tab';
}

type AvatarSizeType = Record<string, number>;

export const AvatarSize: AvatarSizeType = {
  large: 120,
  medium: 80,
  small: 40,
  tab: 50,
};
