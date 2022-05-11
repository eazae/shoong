import Root from '@navigations/Root';
import { NavigationContainer } from '@react-navigation/native';
import Theme from '@theme/Theme';
import { ThemeProvider } from '@theme/Theme2/styled-components';
import { DarkTheme, LightTheme } from '@theme/Theme2/Theme';

// (https://moviendo.me/building-a-solana-wallet-cross-platform-app-with-expo-web3-and-react-native.html)
import 'react-native-url-polyfill/auto';

import { Alert, Linking, NativeModules, useColorScheme } from 'react-native';
import { getAppThemeSettings } from '@utils/asyncStorage';
import { useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';
// import { ThemeProvider } from 'styled-components/native';
import messaging from '@react-native-firebase/messaging';
import { isIos } from '@utils/native';

export default function App() {
  const isSystemDark = useColorScheme() === 'dark';
  const [isDark, setIsDark] = useState<boolean>(true);

  const requestUserPermission = async () => {
    /* 0 이 들어올 경우 : 거절 상태일 때.
    1 이 들어올 경우 : 승인 상태일 때.
    2 가 들어올 경우 : iOS 12 이상에서의 '잠정적 승인' 상태일 때. */
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    } else {
      Alert.alert('알림 허용', '알림이 허용되지 않았습니다. 설정화면으로 이동하시겠습니까?', [
        { text: '다음에', style: 'cancel' },
        {
          text: '설정',
          style: 'default',
          onPress: () => {
            Linking.openURL('app-settings://notification/Shoong');
          },
        },
      ]);
      // if (isIos()) Linking.openURL('App-Prefs:root');
      // else {
      //   Linking.openSettings();
      //   if (NativeModules.OpenExternalURLModule)
      //     NativeModules.OpenExternalURLModule.linkAndroidSettings();
      // }
    }
  };

  const getThemeSettings = async () => {
    const appSetting = await getAppThemeSettings();
    setIsDark(appSetting === 'system' ? isSystemDark : appSetting === 'dark');
  };

  useEffect(() => {
    requestUserPermission();
  }, []);

  useEffect(() => {
    getThemeSettings();
  }, [isSystemDark]);

  return (
    <>
      <RecoilRoot>
        <ThemeProvider theme={isDark ? DarkTheme : LightTheme}>
          {/* <NavigationContainer theme={isDark ? Theme.dark.navigation : Theme.light.navigation}> */}
          <NavigationContainer theme={isDark ? DarkTheme.navigation : LightTheme.navigation}>
            <Root />
          </NavigationContainer>
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}
