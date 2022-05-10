import AsyncStorage from '@react-native-async-storage/async-storage';

export const clearSettings = async () => {
  await AsyncStorage.clear().then(console.log).catch(console.error);
};

export const getAllKeys = async () => {
  return await AsyncStorage.getAllKeys();
  // .then(console.log).catch(console.error);
};

/**
 * 다크모드, 라이트모드를 위한 설정
 * @param setting 'dark' | 'light' | 'system'
 */
export const setAppThemeSettings = async (setting: 'dark' | 'light' | 'system') => {
  await AsyncStorage.setItem('AppThemeSettings', setting);
};

export const getAppThemeSettings = async () => {
  const data = await AsyncStorage.getItem('AppThemeSettings');
  return data ?? 'system'; // default값: light mode
};

/**
 *
 * @param settings
 */

export const setEnableNotificationSettings = async (setting: boolean) => {
  //@ts-ignore
  await AsyncStorage.mergeItem('EnableNotificationSettings', setting.toString());
};

export const setNotificationDetailSettings = async (settings: object) => {
  //@ts-ignore
  await AsyncStorage.mergeItem('NotificationDetailSettings', JSON.stringify(settings));
};

export const getNotificationSettings = async () => {
  const data = await AsyncStorage.multiGet([
    'EnableNotificationSettings',
    'NotificationDetailSettings',
  ]);

  if (!data[0][1]) await setEnableNotificationSettings(true);
  if (!data[1][1])
    await setNotificationDetailSettings({
      sendRequestSetting: true,
      sendSuccessSetting: true,
      sendFailSetting: true,
      receiveRequestSetting: true,
      receiveSuccessSetting: true,
      purchaceTokenSetting: true,
    });
  return {
    enableNotificationSettings: data[0][1] ? data[0][1] === 'true' : true,
    notificationDetailSettings: data[1][1]
      ? JSON.parse(data[1][1])
      : {
          sendRequestSetting: true,
          sendSuccessSetting: true,
          sendFailSetting: true,
          receiveRequestSetting: true,
          receiveSuccessSetting: true,
          purchaceTokenSetting: true,
        },
  };
};

/**
 *
 * @param setting
 */
export const setBiometricSettings = async (setting: boolean) => {
  await AsyncStorage.setItem('EnableBiometricSettings', setting.toString());
};

export const getBiometricSettings = async () => {
  const data = await AsyncStorage.getItem('EnableBiometricSettings').catch(console.log);
  return data ?? true; // 초기값 true
};
