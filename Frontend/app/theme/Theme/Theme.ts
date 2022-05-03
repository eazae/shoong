import Palette from '@theme/Palette';

const Theme = {
  light: {
    textColor: Palette.mono500,
    mainBgColor: Palette.mono150,
    cardColor: Palette.mono100,
    borderColor: Palette.mono200,
    navigation: {
      dark: false,
      colors: {
        primary: Palette.primary,
        background: Palette.mono150,
        card: Palette.mono150,
        text: Palette.mono500,
        border: 'transparent',
        notification: Palette.mono300,
      },
    },
  },
  dark: {
    textColor: Palette.mono100,
    mainBgColor: Palette.mono500,
    cardColor: Palette.mono400,
    borderColor: Palette.mono300,
    navigation: {
      dark: true,
      colors: {
        primary: Palette.primary,
        background: Palette.mono500,
        card: Palette.mono500,
        text: Palette.mono100,
        border: 'transparent',
        notification: Palette.mono300,
      },
    },
  },
};

export default Theme;
