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

export default color;
