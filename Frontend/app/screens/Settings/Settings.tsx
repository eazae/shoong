import TextButton from '@components/common/TextButton/TextButton';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ContextType, createContext, ProviderProps, useState } from 'react';
import { Alert } from 'react-native';
import BiometricSettings from './BiometricSettings';
import NotificationSettings from './NotificationSettings';
import SettingsHome from './SettingsHome';
import ThemeSettings from './ThemeSettings';
import UserInfoSettings from './UserInfoSettings';

const { Navigator, Screen } = createNativeStackNavigator();

//https://stackoverflow.com/a/62047962
const SettingsContext = createContext(false);

const Settings = () => {
  const { navigate, setParams } = useNavigation();
  const [isUserInfoEdit, setIsUserInfoEdit] = useState(false);

  return (
    <>
      <SettingsContext.Provider value={isUserInfoEdit}>
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
          <Screen name="설정" component={SettingsHome} />
          <Screen
            name="사용자 정보"
            component={UserInfoSettings}
            initialParams={{ isEdit: false }}
            options={
              {
                // headerRight: () => (
                // <TextButton title="수정하기" onPress={() => setIsUserInfoEdit(true)} />
                // ),
              }
            }
          />
          <Screen name="알림" component={NotificationSettings} />
          {/* <Screen name="대표 카드 설정" component={SettingsHome} /> */}
          <Screen name="생체 인증 설정" component={BiometricSettings} />
          <Screen name="화면 테마" component={ThemeSettings} />
        </Navigator>
      </SettingsContext.Provider>
    </>
  );
};

export default Settings;
