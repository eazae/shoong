import { Switch } from '@components/common/Switch/Switch';
import SettingsItem from '@containers/Settings/SettingsItem/SettingsItem';
import { useState } from 'react';
import { View } from 'react-native';

const BiometricSettings = () => {
  const [settings, setSettings] = useState(true);

  return (
    <>
      <View>
        <SettingsItem
          label="생체인증(지문, Face ID) 설정"
          isEnabled={settings}
          onChange={() => setSettings((prev) => !prev)}
        />
      </View>
    </>
  );
};

export default BiometricSettings;
