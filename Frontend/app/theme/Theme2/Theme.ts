import { DarkColors, LightColors, TextColors } from '@theme/Color/Color';
import Palette from '@theme/Palette';
import { DefaultTheme } from 'styled-components/native';

export const LightTheme: DefaultTheme = {
  /* Text */
  textColor: TextColors.MONO100,
  textDisabledColor: TextColors.MONO60,
  textHighlightColor: TextColors.HIGHLIGHT,

  /* Background */
  mainBgColor: LightColors.BACKGROUND_DEFAULT,
  subBgColor: LightColors.BACKGROUND_VARIANT,

  /* Components */
  enabledColor: LightColors.PRIMARY100,
  disabledColor: LightColors.PRIMARY20,
  borderColor: LightColors.MONO60,

  /* Semantics */
  errorColor: LightColors.ERROR,

  cardColor: Palette.mono100,

  navigation: {
    dark: false,
    colors: {
      primary: LightColors.PRIMARY100,
      background: LightColors.BACKGROUND_DEFAULT,
      card: LightColors.BACKGROUND_VARIANT,
      text: TextColors.MONO100,
      border: 'transparent',
      notification: Palette.mono300,
    },
  },
  lightBgColor: Palette.mono100,
};

export const DarkTheme: DefaultTheme = {
  /* Text */
  textColor: TextColors.MONO0,
  textDisabledColor: TextColors.MONO60,
  textHighlightColor: TextColors.HIGHLIGHT,

  /* Background */
  mainBgColor: DarkColors.BACKGROUND_DEFAULT,
  subBgColor: DarkColors.BACKGROUND_VARIANT,

  /* Components */
  enabledColor: DarkColors.PRIMARY20,
  disabledColor: DarkColors.PRIMARY100,

  borderColor: DarkColors.MONO60,

  /* Semantics */
  errorColor: DarkColors.ERROR,

  cardColor: Palette.mono100,
  navigation: {
    dark: true,
    colors: {
      primary: DarkColors.PRIMARY20,
      background: DarkColors.BACKGROUND_DEFAULT,
      card: DarkColors.BACKGROUND_DEFAULT,
      text: TextColors.MONO0,
      border: 'transparent',
      notification: Palette.mono300,
    },
  },
  lightBgColor: Palette.mono400,
};

// export { LightTheme, DarkTheme };
