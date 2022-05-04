export type textColorNames = 'light' | 'dark' | 'primary' | 'error';
export type borderColorNames = 'light' | 'dark' | 'primary' | 'error';

export type textColorType = Record<textColorNames, string>;
export type borderColorType = Record<borderColorNames, string>;

export type colorType = { textColor: textColorType; borderColor: textColorType };
