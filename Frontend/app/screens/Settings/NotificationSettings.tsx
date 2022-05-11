import Divider from '@components/common/Divider/Divider';
import SettingsItem from '@containers/Settings/SettingsItem/SettingsItem';
import { getNotificationSettings, setNotificationDetailSettings } from '@utils/asyncStorage';
import { useEffect, useRef, useState } from 'react';
import messaging from '@react-native-firebase/messaging';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import { Alert, AppState, Linking } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

const NotificationSettings = () => {
  // 사용자가 (네이티브) 설정 화면으로 갔다가 다시 돌아올 시, 설정 변경사항을 알기 위해서
  // const isFocused = useIsFocused();
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  const [totalSetting, setTotalSetting] = useState(false);
  const [sendRequestSetting, setSendRequestSetting] = useState(false);
  const [sendSuccessSetting, setSendSuccessSetting] = useState(false);
  const [sendFailSetting, setSendFailSetting] = useState(false);
  const [receiveRequestSetting, setReceiveRequestSetting] = useState(false);
  const [receiveSuccessSetting, setReceiveSuccessSetting] = useState(false);
  const [purchaceTokenSetting, setPurchaceTokenSetting] = useState(false);

  const toggleNotificationSetting = async () => {
    // PushNotificationIOS.requestPermissions();
    //.then((permissions) => console.log(permissions));
    // Linking.openSettings();
    Linking.openURL('App-Prefs:NOTIFICATIONS_ID&path=org.name.Shoong');
  };

  const saveSettings = async (setting: object) => {
    await setNotificationDetailSettings(setting);
  };

  const getTotalSettings = async () => {
    const authStatus = await messaging().requestPermission();
    setTotalSetting(authStatus === 1);
    if (authStatus === 1) getDetailSettings();
  };

  const getDetailSettings = async () => {
    const data = await getNotificationSettings();
    const authStatus = (await messaging().requestPermission()) === 1;
    setTotalSetting(authStatus || data.enableNotificationSettings);
    setSendRequestSetting(data.notificationDetailSettings.sendRequestSetting);
    setSendSuccessSetting(data.notificationDetailSettings.sendSuccessSetting);
    setSendFailSetting(data.notificationDetailSettings.sendFailSetting);
    setReceiveRequestSetting(data.notificationDetailSettings.receiveRequestSetting);
    setReceiveSuccessSetting(data.notificationDetailSettings.receiveSuccessSetting);
    setPurchaceTokenSetting(data.notificationDetailSettings.purchaceTokenSetting);
  };

  // 앱이 foreground에 있는지 검사하는 방법
  // (https://reactnative.dev/docs/appstate)
  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
        console.log('App has come to the foreground!');
        getTotalSettings();
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log('AppState', appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    getTotalSettings();
  }, []);

  return (
    <>
      <SettingsItem
        label="전체알림"
        isEnabled={totalSetting}
        onChange={() => {
          toggleNotificationSetting();
          // setTotalSetting((prev) => !prev);
        }}
      />
      <Divider />
      {totalSetting ? (
        <>
          {/* <Text style={{ color: 'white' }}>기능별 알림 (임시 컴포넌트)</Text> */}
          <SettingsItem
            label="송금 요청 알림"
            isEnabled={sendRequestSetting}
            onChange={() => {
              saveSettings({ sendRequestSetting: !sendRequestSetting });
              setSendRequestSetting((prev) => !prev);
            }}
          />
          <SettingsItem
            label="송금 완료 알림"
            isEnabled={sendSuccessSetting}
            onChange={() => {
              saveSettings({ sendSuccessSetting: !sendSuccessSetting });
              setSendSuccessSetting((prev) => !prev);
            }}
          />
          <SettingsItem
            label="송금 실패 알림"
            isEnabled={sendFailSetting}
            onChange={() => {
              saveSettings({ sendFailSetting: !sendFailSetting });
              setSendFailSetting((prev) => !prev);
            }}
          />
          <Divider />
          <SettingsItem
            label="입금 시도 알림"
            isEnabled={receiveRequestSetting}
            onChange={() => {
              saveSettings({ receiveRequestSetting: !receiveRequestSetting });
              setReceiveRequestSetting((prev) => !prev);
            }}
          />
          <SettingsItem
            label="입금 성공 알림"
            isEnabled={receiveSuccessSetting}
            onChange={() => {
              saveSettings({ receiveSuccessSetting: !receiveSuccessSetting });
              setReceiveSuccessSetting((prev) => !prev);
            }}
          />
          <Divider />
          <SettingsItem
            label="구매 결정 알림"
            isEnabled={purchaceTokenSetting}
            onChange={() => {
              saveSettings({ purchaceTokenSetting: !purchaceTokenSetting });
              setPurchaceTokenSetting((prev) => !prev);
            }}
          />
        </>
      ) : null}
    </>
  );
};

export default NotificationSettings;
