import TextButton from '@components/common/TextButton/TextButton';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BiometricSettings from './BiometricSettings';
import NotificationSettings from './NotificationSettings';
import SettingsHome from './SettingsHome';
import ThemeSettings from './ThemeSettings';
import UserInfoSettings from './UserInfoSettings';

const { Navigator, Screen } = createNativeStackNavigator();

const Settings = () => {
  return (
    <>
      <Navigator
        initialRouteName="설정"
        // defaultScreenOptions={{ headerShown: false }}
        screenOptions={{
          headerBackTitleVisible: false,
          // headerShown: false,
          // tabBarStyle: {
          //   backgroundColor: isAndroid() ? theme.cardColor : 'transparent',
          //   borderRadius: 40,
          //   padding: 10,
          //   height: 90,
          //   position: 'absolute',
          //   overflow: 'hidden',
          // },
          // tabBarBackground: () => (
          //   <BlurView
          //     tint={isDark ? 'dark' : 'light'}
          //     intensity={30}
          //     style={StyleSheet.absoluteFill}
          //   />
          // ),
        }}
      >
        <Screen name="설정메인" component={SettingsHome} />
        <Screen
          name="사용자 정보"
          component={UserInfoSettings}
          options={{
            headerRight: () => <TextButton title="수정하기" />,
          }}
        />
        <Screen name="알림" component={NotificationSettings} />
        {/* <Screen name="대표 카드 설정" component={SettingsHome} /> */}
        <Screen name="생체 인증 설정" component={BiometricSettings} />
        <Screen name="화면 테마" component={ThemeSettings} />
      </Navigator>
    </>
  );
};

export default Settings;
