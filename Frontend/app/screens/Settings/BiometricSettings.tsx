import { Switch } from '@components/common/Switch/Switch';
import SettingsItem from '@containers/Settings/SettingsItem/SettingsItem';
import { getBiometricSettings, setBiometricSettings } from '@utils/asyncStorage';
import { useEffect, useState } from 'react';
import { View } from 'react-native';

const BiometricSettings = () => {
  const [settings, setSettings] = useState(true);

  const saveSettings = async (setting: boolean) => {
    await setBiometricSettings(!setting);
  };

  const getSettings = async () => {
    setSettings(Boolean(await getBiometricSettings()));
  };

  useEffect(() => {
    getSettings();
  }, []);

  return (
    <>
      <View>
        <SettingsItem
          label="생체인증(지문, Face ID) 설정"
          isEnabled={settings}
          onChange={() => {
            saveSettings(!settings);
            setSettings((prev) => !prev);
          }}
        />
      </View>
    </>
  );
};

export default BiometricSettings;
