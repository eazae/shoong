import { DarkColors, LightColors, TextColors } from '@theme/Color/Color';
import Palette from '@theme/Palette';
import { DefaultTheme } from 'styled-components/native';

export const LightTheme: DefaultTheme = {
  theme: 'light',

  primaryColor: LightColors.PRIMARY100,
  primaryLightColor: LightColors.PRIMARY60,

  secondaryColor: LightColors.SECONDARY100,
  /* Text */
  textColor: TextColors.MONO100,
  textSubColor: TextColors.MONO80,
  textDisabledColor: TextColors.MONO60,
  textHighlightColor: LightColors.PRIMARY100,
  textLinkColor: TextColors.HIGHLIGHT,

  /* Background */
  mainBgColor: LightColors.BACKGROUND_DEFAULT,
  subBgColor: LightColors.BACKGROUND_VARIANT,
  greyBgColor: LightColors.MONO60,

  /* Components */
  enabledColor: LightColors.PRIMARY100,
  disabledColor: LightColors.PRIMARY40,
  subColor: LightColors.MONO40,
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
  theme: 'dark',

  primaryColor: DarkColors.PRIMARY100,
  primaryLightColor: DarkColors.PRIMARY40,
  secondaryColor: DarkColors.SECONDARY100,
  /* Text */
  textColor: TextColors.MONO0,
  textSubColor: TextColors.MONO40,
  textDisabledColor: TextColors.MONO60,
  textHighlightColor: DarkColors.PRIMARY20,
  textLinkColor: TextColors.HIGHLIGHT,

  /* Background */
  mainBgColor: DarkColors.BACKGROUND_DEFAULT,
  subBgColor: DarkColors.BACKGROUND_VARIANT,
  greyBgColor: DarkColors.MONO100,

  /* Components */
  enabledColor: DarkColors.PRIMARY40,
  disabledColor: DarkColors.PRIMARY80,
  subColor: DarkColors.MONO80,

  borderColor: Palette.mono300,

  /* Semantics */
  errorColor: DarkColors.ERROR,

  cardColor: Palette.mono400,
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
