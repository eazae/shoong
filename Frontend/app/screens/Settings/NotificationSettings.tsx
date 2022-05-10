import Divider from '@components/common/Divider/Divider';
import SettingsItem from '@containers/Settings/SettingsItem/SettingsItem';
import { getNotificationSettings, setNotificationDetailSettings } from '@utils/asyncStorage';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

const NotificationSettings = () => {
  // TODO 임시
  const [totalSetting, setTotalSetting] = useState(false);
  const [sendRequestSetting, setSendRequestSetting] = useState(false);
  const [sendSuccessSetting, setSendSuccessSetting] = useState(false);
  const [sendFailSetting, setSendFailSetting] = useState(false);
  const [receiveRequestSetting, setReceiveRequestSetting] = useState(false);
  const [receiveSuccessSetting, setReceiveSuccessSetting] = useState(false);
  const [purchaceTokenSetting, setPurchaceTokenSetting] = useState(false);

  const saveSettings = async (setting: object) => {
    await setNotificationDetailSettings(setting);
  };

  const getSettings = async () => {
    const data = await getNotificationSettings();
    console.log(data);
    setTotalSetting(data.enableNotificationSettings);
    setSendRequestSetting(data.notificationDetailSettings.sendRequestSetting);
    setSendSuccessSetting(data.notificationDetailSettings.sendSuccessSetting);
    setSendFailSetting(data.notificationDetailSettings.sendFailSetting);
    setReceiveRequestSetting(data.notificationDetailSettings.receiveRequestSetting);
    setReceiveSuccessSetting(data.notificationDetailSettings.receiveSuccessSetting);
    setPurchaceTokenSetting(data.notificationDetailSettings.purchaceTokenSetting);
  };

  useEffect(() => {
    getSettings();
  }, []);

  return (
    <>
      <SettingsItem
        label="전체알림"
        isEnabled={totalSetting}
        onChange={() => setTotalSetting((prev) => !prev)}
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
