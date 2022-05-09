import Divider from '@components/common/Divider/Divider';
import SettingsItem from '@containers/Settings/SettingsItem/SettingsItem';
import { useState } from 'react';
import { Text, View } from 'react-native';

const NotificationSettings = () => {
  // TODO 임시
  const [totalSetting, setTotalSetting] = useState(true);
  const [sendRequestSetting, setSendRequestSetting] = useState(true);
  const [sendSuccessSetting, setSendSuccessSetting] = useState(true);
  const [sendFailSetting, setSendFailSetting] = useState(true);
  const [receiveRequestSetting, setReceiveRequestSetting] = useState(true);
  const [receiveSuccessSetting, setReceiveSuccessSetting] = useState(true);
  const [purchaceTokenSetting, setPurchaceTokenSetting] = useState(true);
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
          <Text style={{ color: 'white' }}>기능별 알림 (임시 컴포넌트)</Text>
          <SettingsItem
            label="송금 요청 알림"
            isEnabled={sendRequestSetting}
            onChange={() => setSendRequestSetting((prev) => !prev)}
          />
          <SettingsItem
            label="송금 완료 알림"
            isEnabled={sendSuccessSetting}
            onChange={() => setSendSuccessSetting((prev) => !prev)}
          />
          <SettingsItem
            label="송금 실패 알림"
            isEnabled={sendFailSetting}
            onChange={() => setSendFailSetting((prev) => !prev)}
          />
          <Divider />
          <SettingsItem
            label="입금 시도 알림"
            isEnabled={receiveRequestSetting}
            onChange={() => setReceiveRequestSetting((prev) => !prev)}
          />
          <SettingsItem
            label="입금 성공 알림"
            isEnabled={receiveSuccessSetting}
            onChange={() => setReceiveSuccessSetting((prev) => !prev)}
          />
          <SettingsItem
            label="구매 결정 알림"
            isEnabled={purchaceTokenSetting}
            onChange={() => setPurchaceTokenSetting((prev) => !prev)}
          />
        </>
      ) : null}
    </>
  );
};

export default NotificationSettings;
