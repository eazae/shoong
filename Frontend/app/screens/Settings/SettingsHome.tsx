import {
  clearJWTValue,
  getJWTValue,
  getSecureStoreValue,
  setJWTValue,
  setSecureStoreValue,
} from '@utils/secureStore';
import Divider from '@components/common/Divider/Divider';
import TabButton from '@components/common/TabButton/TabButton';
import AccountTabButton from '@containers/Settings/AccountTabButton/AccountTabButton';
import AppVersionText from '@containers/Settings/AppVersionText.tsx/AppVersionText';
import { Alien, UserCircle } from 'phosphor-react-native';
import { useContext, useEffect, useState } from 'react';
import { Alert, Text } from 'react-native';
import { NavigationContext, useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useSetRecoilState } from 'recoil';
import { isLoggedState } from '@atoms/atoms';

const SettingsHome: React.FC<NativeStackScreenProps<any, '설정'>> = ({ navigation }) => {
  const setIsLogged = useSetRecoilState(isLoggedState);
  return (
    <>
      <AccountTabButton />
      <Divider />
      <TabButton onPress={() => navigation.navigate('알림')} title={'알림'} />
      <TabButton onPress={() => navigation.navigate('')} title={'QR코드 관리'} />
      <TabButton onPress={() => navigation.navigate('')} title={'대표 카드 설정'} />
      <TabButton onPress={() => navigation.navigate('생체 인증 설정')} title={'생체 인증 설정'} />
      <TabButton onPress={() => navigation.navigate('화면 테마')} title={'화면 테마'} />
      <Divider />
      <TabButton
        onPress={() =>
          Alert.alert('로그아웃', '정말 로그아웃 하시겠습니까?', [
            { text: '취소', style: 'cancel' },
            {
              text: '확인',
              style: 'default',
              onPress: () => {
                clearJWTValue();
                navigation.goBack();
                setIsLogged((curr) => !curr);
                // Alert.alert(await getJWTValue());
              },
            },
          ])
        }
        title={'로그아웃'}
      />
      <AppVersionText />
    </>
  );
};

export default SettingsHome;
