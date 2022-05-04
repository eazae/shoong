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
    <>
      <ThemeProvider theme={isDark ? DarkTheme : LightTheme}>
        <NavigationContainer theme={isDark ? Theme.dark.navigation : Theme.light.navigation}>
<<<<<<< HEAD
          {/* <NavigationContainer> */}
=======
>>>>>>> 743d60c08546d76c98718bf0ab4b18b063f8ffc3
          <Root />
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
}
