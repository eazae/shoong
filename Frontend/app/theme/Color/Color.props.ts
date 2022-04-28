export type textColorNames = 'light' | 'dark' | 'primary' | 'error';

export type textColorType = Record<textColorNames, string>;

export type colorType = { textColor: textColorType };
