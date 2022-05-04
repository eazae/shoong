import Palette from '@theme/Palette';
import { borderColorType, colorType, textColorType } from './Color.props';

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

const color: colorType = {
  textColor,
  borderColor,
};

export default color;
