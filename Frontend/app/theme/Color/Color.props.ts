export type textColorNames = 'light' | 'dark' | 'primary' | 'error';
export type borderColorNames = 'light' | 'dark' | 'primary' | 'error';
export type buttonColorNames = 'primary' | 'secondary' | 'error' | 'disabled' | 'transparent';

export type textColorType = Record<textColorNames, string>;
export type borderColorType = Record<borderColorNames, string>;
export type buttonColorType = Record<buttonColorNames, string>;

export type colorType = {
  textColor: textColorType;
  borderColor: textColorType;
  buttonColor: buttonColorType;
};
