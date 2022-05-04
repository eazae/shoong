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

const buttonColor: buttonColorType = {
  primary: Palette.primary,
  secondary: Palette.primaryOpacity,
  error: Palette.danger,
  disabled: Palette.mono300,
};

const color: colorType = {
  textColor,
  borderColor,
  buttonColor,
};

/**
 * 신지우 - 임시
 */
export const colors = {
  // primary color
  PRIMARY_DISABLED: '',
  PRIMARY_LIGHT: '',
  PRIMARY: '#ffc048',
  PRIMARY_DARK: '',

  // secondary color
  BLACK: '#1e272e',
  DARK_GREY: '#d2d2d2',
  LIGHT_GREY: '#808e9b',
  WHITE: '#ffffff',

  // grayscale color
  // BLACK: '',
  // DARK_GRAY: '',
  // LIGHT_GRAY: '',
  // DARK_GRAY: '',
  // : "",
  // DARK_GRAY: "",

  // text color
  // TEXT: ,

  // accent color
  SUCCESS: '',
};

export const lightMode = {
  // primary color
  PRIMARY_DISABLED: '',
  PRIMARY_LIGHT: '',
  PRIMARY: '#ffc048',
  PRIMARY_DARK: '',

  // secondary color
  BLACK: '#1e272e',
  DARK_GREY: '#d2d2d2',
  LIGHT_GREY: '#808e9b',
  WHITE: '#ffffff',
};

/**
 * 신지우 - 임시
 */
// export const colors = {
//   // primary color
//   PRIMARY_DISABLED: '',
//   PRIMARY_LIGHT: '',
//   PRIMARY: '#ffc048',
//   PRIMARY_DARK: '',

//   // secondary color
//   BLACK: '#1e272e',
//   DARK_GREY: '#d2d2d2',
//   LIGHT_GREY: '#808e9b',
//   WHITE: '#ffffff',

//   // grayscale color
//   // BLACK: '',
//   // DARK_GRAY: '',
//   // LIGHT_GRAY: '',
//   // DARK_GRAY: '',
//   // : "",
//   // DARK_GRAY: "",

//   // text color
//   // TEXT: ,

//   // accent color
//   SUCCESS: '',
// };

// export const lightMode = {
//   // primary color
//   PRIMARY_DISABLED: '',
//   PRIMARY_LIGHT: '',
//   PRIMARY: '#ffc048',
//   PRIMARY_DARK: '',

//   // secondary color
//   BLACK: '#1e272e',
//   DARK_GREY: '#d2d2d2',
//   LIGHT_GREY: '#808e9b',
//   WHITE: '#ffffff',
// };

export default color;
