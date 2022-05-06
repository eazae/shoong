import Root from '@navigations/Root';
import { NavigationContainer } from '@react-navigation/native';
import Theme from '@theme/Theme';
import { ThemeProvider } from '@theme/Theme2/styled-components';
import { DarkTheme, LightTheme } from '@theme/Theme2/Theme';

// (https://moviendo.me/building-a-solana-wallet-cross-platform-app-with-expo-web3-and-react-native.html)
import 'react-native-url-polyfill/auto';

import { useColorScheme } from 'react-native';
// import { ThemeProvider } from 'styled-components/native';

export default function App() {
  const isDark = useColorScheme() === 'dark';
  return (
    <>
      <ThemeProvider theme={isDark ? DarkTheme : LightTheme}>
        <NavigationContainer theme={isDark ? Theme.dark.navigation : Theme.light.navigation}>
          <Root />
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
}
