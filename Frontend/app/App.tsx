import Root from '@navigations/Root';
import { NavigationContainer } from '@react-navigation/native';
import Theme from '@theme/Theme';
import { ThemeProvider } from '@theme/Theme2/styled-components';
import { DarkTheme, LightTheme } from '@theme/Theme2/Theme';

import { useColorScheme } from 'react-native';
// import { ThemeProvider } from 'styled-components/native';

export default function App() {
  const isDark = useColorScheme() === 'dark';
  return (
    <NavigationContainer theme={isDark ? Theme.dark.navigation : Theme.light.navigation}>
      {/* <ThemeProvider theme={isDark ? Theme.dark : Theme.light}> */}
      <ThemeProvider theme={isDark ? DarkTheme : LightTheme}>
        {/* <Typography color="primary">Open up App.js to start working on your app!</Typography>
        <StatusBar style="auto" />
        <Test /> */}
        <Root />
      </ThemeProvider>
    </NavigationContainer>
  );
}
