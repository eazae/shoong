import TabButton from '@components/common/TabButton/TabButton';
import { Alien } from 'phosphor-react-native';
import { useState } from 'react';

const Settings: React.FC<any> = () => {
  return (
    <>
      <TabButton onPress={() => console.log('알림')} title={'알림'} />
    </>
  );
};

export default Settings;
