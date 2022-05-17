import Palette from '@theme/Palette';
import { borderColorType, buttonColorType, colorType, textColorType } from './Color.props';

const textColor: textColorType = {
  primary: Palette.primary,
  error: Palette.danger,
  dark: Palette.mono500,
  light: Palette.mono100,
};

const borderColor: borderColorType = {
  primary: Palette.primary,
  error: Palette.danger,
  dark: Palette.mono500,
  light: Palette.mono100,
};

// const buttonColor: buttonColorType = {
//   primary: Palette.primary,
//   secondary: Palette.primaryOpacity,
//   error: Palette.danger,
//   disabled: Palette.mono300,
//   transparent: 'transparent',
// };

export const colors = {
  /* Primary Colors */
  PRIMARY_DISABLED: '#D0DBFF',
  PRIMARY_FOCUSED: '',
  PRIMARY_DEFAULT: '#2752E7',
  PRIMARY_HOVER: '',

  PRIMARY120: '#3C63EC',
  PRIMARY100: '#3D66F5',
  PRIMARY80: '#6485F7',
  PRIMARY60: '#8BA3F9',
  PRIMARY40: '#B1C2FB',
  PRIMARY20: '#D8E0FD',

  /* Secondary Colors */
  SECONDARY120: '#F4AE45',
  SECONDARY100: '#FFB545',
  SECONDARY80: '#FFC46A',
  SECONDARY60: '#FFD38F',
  SECONDARY40: '#FFE1B5',
  SECONDARY20: '#FFF0DA',

  /* Neutrals */
  /* Text Colors */
  // MONO100: '#2C3131',
  // MONO80: '#626262',
  // MONO60: '#A9A9A9',
  // MONO40: '#CACACA',
  // MONO20: '#E9E9E9',
  // MONO0: '#ffffff',
  MONO100: '#2C3131',
  MONO80: '#717784',
  MONO60: '#9CA1AA',
  MONO40: '#C8CBD0',
  MONO20: '#F4F5F6',
  MONO0: '#ffffff',

  /* Background Colors */
  BACKGROUND_DARK: '',
  BACKGROUND_DEFAULT: '',
  BACKGROUND_LIGHT: '',

  /* Semantics */
  SUCCESS: '#3F845F',
  WARNING: '#E4C65B',
  ERROR: '#E25C5C',
  INFO: '#2685CA',
};

export const LightColors = {
  /* Primary Colors */
  PRIMARY_DISABLED: '#D0DBFF',
  PRIMARY_FOCUSED: '',
  PRIMARY_DEFAULT: '#2752E7',
  PRIMARY_HOVER: '',

  PRIMARY120: '#5337D4',
  PRIMARY100: '#5F39F8',
  PRIMARY80: '#7F61F9',
  PRIMARY60: '#9F88FB',
  PRIMARY40: '#BFB0FC',
  PRIMARY20: '#DFD7FE',

  /* Secondary Colors */
  SECONDARY120: '#F4AE45',
  SECONDARY100: '#FFB545',
  SECONDARY80: '#FFC46A',
  SECONDARY60: '#FFD38F',
  SECONDARY40: '#FFE1B5',
  SECONDARY20: '#FFF0DA',

  /* Neutrals */
  /* Text Colors */
  MONO100: '#2C3131',
  MONO80: '#717784',
  MONO60: '#9CA1AA',
  MONO40: '#C8CBD0',
  MONO20: '#F4F5F6',
  MONO0: '#ffffff',

  /* Background Colors */
  BACKGROUND_DEFAULT: '#F5F7FF',
  // BACKGROUND_VARIANT: '#ebecef',
  BACKGROUND_VARIANT: '#FFFFFF',

  /* Semantics */
  SUCCESS: '#3F845F',
  WARNING: '#E4C65B',
  ERROR: '#E25C5C',
  INFO: '#2685CA',
};

export const DarkColors = {
  /* Primary Colors */
  PRIMARY_DISABLED: '#D0DBFF',
  PRIMARY_FOCUSED: '',
  PRIMARY_DEFAULT: '#2752E7',
  PRIMARY_HOVER: '',

  PRIMARY120: '#2B2540',
  PRIMARY100: '#373345',
  PRIMARY80: '#3C2B7A',
  PRIMARY60: '#4730A1',
  PRIMARY40: '#5435D1',
  PRIMARY20: '#5F39F8',

  /* Secondary Colors */
  SECONDARY120: '#F4AE45',
  SECONDARY100: '#FFB545',
  SECONDARY80: '#FFC46A',
  SECONDARY60: '#FFD38F',
  SECONDARY40: '#FFE1B5',
  SECONDARY20: '#FFF0DA',

  /* Neutrals */
  /* Text Colors */
  MONO100: '#2C3131',
  MONO80: '#717784',
  MONO60: '#9CA1AA',
  MONO40: '#C8CBD0',
  MONO20: '#F4F5F6',
  MONO0: '#ffffff',

  /* Background Colors */
  BACKGROUND_DEFAULT: '#111013',
  BACKGROUND_VARIANT: '#211F24',

  /* Semantics */
  SUCCESS: '#0C66A6',
  WARNING: '#D8AC11',
  ERROR: '#2B7B2A',
  INFO: '#B42020',
};

export const TextColors = {
  /* Text Colors */
  MONO100: '#2C3131',
  MONO80: '#717784',
  MONO60: '#9CA1AA',
  MONO40: '#C8CBD0',
  MONO20: '#F4F5F6',
  MONO0: '#ffffff',

  HIGHLIGHT: '#3C63EC',
};

const buttonColor: buttonColorType = {
  primary: LightColors.PRIMARY100,
  secondary: LightColors.SECONDARY120,
  error: LightColors.ERROR,
  disabled: LightColors.MONO100,
  transparent: 'transparent',
};

const color: colorType = {
  textColor,
  borderColor,
  buttonColor,
};

export default color;
