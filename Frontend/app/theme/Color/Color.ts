import Palette from '@theme/Palette';
import { colorType, textColorType } from './Color.props';

const textColor: textColorType = {
  primary: Palette.primary,
  error: Palette.danger,
  dark: Palette.mono500,
  light: Palette.mono100,
};

const color: colorType = {
  textColor,
};

/**
 * 신지우 - 임시
 */
export const colors = {
  PRIMARY: '#ffc048',

  BLACK: '#1e272e',
  DARK_GREY: '#d2d2d2',
  LIGHT_GREY: '#808e9b',
  WHITE: '#ffffff',
};

export default color;
