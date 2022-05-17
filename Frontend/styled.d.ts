import { Theme } from '@react-navigation/native';
import 'styled-components';

// declare module 'styled-components/native' {
//   export interface DefaultTheme {
//     textColor: string;
//     mainBgColor: string;
//     cardColor: string;
//     borderColor: string;
//     navigation: Theme;

//     lightBgColor: string;
//   }
// }

declare module 'styled-components/native' {
  export interface DefaultTheme {
    primaryColor: string;
    secondaryColor: string;

    textColor: string;
    textSubColor: string;
    textDisabledColor: string;
    textHighlightColor: string;
    textLinkColor: string;

    mainBgColor: string;
    subBgColor: string;

    enabledColor: string;
    disabledColor: string;
    subColor: string;

    errorColor: string;

    cardColor: string;
    borderColor: string;
    navigation: Theme;

    lightBgColor: string;
  }
}
