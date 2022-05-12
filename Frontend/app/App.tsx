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
import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import { isIos } from '@utils/native';
import { fcmService } from '@services/notifications/FCMService';
import { notificationService } from '@services/notifications/NotificationService';

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

  // (https://rnfirebase.io/messaging/usage#foreground-state-messages)
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    fcmService.registerAppWithFCM();
    fcmService.register(onRegister, onNotification, onOpenNotification);
    notificationService.configure(onOpenNotification);

    function onRegister(token: string) {
      console.log('[App] onRegister : token :', token);
    }

    function onNotification(notify: FirebaseMessagingTypes.Notification) {
      console.log('[App] onNotification : notify :', notify);
      const options = {
        soundName: 'default',
        playSound: true,
      };
      notificationService.showNotification(0, notify.title, notify.body, notify, options);
    }

    function onOpenNotification(notify: FirebaseMessagingTypes.Notification) {
      console.log('[App] onOpenNotification : notify :', notify);
      alert('Open Notification : notify.body :' + notify.body);
    }
    return () => {
      console.log('[App] unRegister');
      fcmService.unRegister();
      notificationService.unRegister();
    };
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
