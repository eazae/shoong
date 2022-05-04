import Divider from '@components/common/Divider/Divider';
import TabButton from '@components/common/TabButton/TabButton';
import AccountTabButton from '@containers/Settings/AccountTabButton/AccountTabButton';
import AppVersionText from '@containers/Settings/AppVersionText.tsx/AppVersionText';
import { Alien, UserCircle } from 'phosphor-react-native';
import { useState } from 'react';
import { Text } from 'react-native';

const Settings: React.FC<any> = () => {
  return (
    <>
      <AccountTabButton />
      <Divider />
      <TabButton onPress={() => console.log('알림')} title={'알림'} />
      <TabButton onPress={() => console.log('QR코드')} title={'QR코드 관리'} />
      <TabButton onPress={() => console.log('생체 인증 설정')} title={'생체 인증 설정'} />
      <TabButton onPress={() => console.log('화면 테마')} title={'화면 테마'} />
      <Divider />
      <TabButton onPress={() => console.log('로그아웃')} title={'로그아웃'} />
      <AppVersionText />
    </>
  );
};

export default Settings;
