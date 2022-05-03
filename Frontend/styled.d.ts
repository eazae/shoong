import { Theme } from '@react-navigation/native';
import 'styled-components';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    textColor: string;
    mainBgColor: string;
    cardColor: string;
    borderColor: string;
    navigation: Theme;

    lightBgColor: string;
  }
}
