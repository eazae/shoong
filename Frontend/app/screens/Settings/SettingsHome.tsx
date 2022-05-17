import { clearJWTValue } from '@utils/secureStore';
import Divider from '@components/common/Divider/Divider';
import TabButton from '@components/common/TabButton/TabButton';
import AccountTabButton from '@containers/Settings/AccountTabButton/AccountTabButton';
import AppVersionText from '@containers/Settings/AppVersionText/AppVersionText';
import { Alert } from 'react-native';
import { StackActions } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useSetRecoilState } from 'recoil';
import { isLoggedInState } from '@atoms/atoms';

const SettingsHome: React.FC<NativeStackScreenProps<any, '설정'>> = ({ navigation }) => {
  const setIsLogged = useSetRecoilState(isLoggedInState);

  const logout = () => {
    Alert.alert('로그아웃', '정말 로그아웃 하시겠습니까?', [
      { text: '취소', style: 'cancel' },
      {
        text: '확인',
        style: 'default',
        onPress: () => {
          clearJWTValue();
          setIsLogged(false);
        },
      },
    ]);
  };

  return (
    <>
      <AccountTabButton />
      <Divider />
      <TabButton onPress={() => navigation.navigate('알림')} title={'알림'} />
      {/* <TabButton onPress={() => navigation.navigate('')} title={'QR코드 관리'} /> */}
      <TabButton onPress={() => console.log('')} title={'대표 카드 설정'} />
      <TabButton onPress={() => navigation.navigate('생체 인증 설정')} title={'생체 인증 설정'} />
      <TabButton onPress={() => navigation.navigate('화면 테마')} title={'화면 테마'} />
      <Divider />
      <TabButton onPress={() => logout()} title={'로그아웃'} />
      <AppVersionText />
    </>
  );
};

export default SettingsHome;
