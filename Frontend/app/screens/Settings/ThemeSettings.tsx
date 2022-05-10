import TabButton from '@components/common/TabButton/TabButton';
import { LightColors, TextColors } from '@theme/Color/Color';
import { getAppThemeSettings, setAppThemeSettings } from '@utils/asyncStorage';
import { Check } from 'phosphor-react-native';
import { useEffect, useState } from 'react';

const ThemeSettings = () => {
  const [setting, setSetting] = useState('');

  const saveSettings = async (data: 'light' | 'dark' | 'system') => {
    await setAppThemeSettings(data);
    setSetting(data);
  };

  const getSettings = async () => {
    setSetting(await getAppThemeSettings());
  };

  useEffect(() => {
    getSettings();
  }, []);

  return (
    <>
      <TabButton
        title="라이트 모드"
        icon={setting === 'light' ? <Check color={TextColors.HIGHLIGHT} weight="bold" /> : <></>}
        onPress={() => saveSettings('light')}
      />
      <TabButton
        title="다크 모드"
        icon={setting === 'dark' ? <Check color={TextColors.HIGHLIGHT} weight="bold" /> : <></>}
        onPress={() => saveSettings('dark')}
      />
      <TabButton
        title="시스템 설정"
        icon={setting === 'system' ? <Check color={TextColors.HIGHLIGHT} weight="bold" /> : <></>}
        onPress={() => saveSettings('system')}
      />
    </>
  );
};
export default ThemeSettings;
