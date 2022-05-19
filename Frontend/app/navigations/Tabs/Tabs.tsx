import WalletHeader from '@containers/WalletHeader';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Friends from '@screens/Friends/Friends';
import Send from '@screens/Send';
import Settings from '@screens/Settings/Settings';
import Wallet from '@screens/Wallet';
import { getUserInfo } from '@services/api/user/userAPI';
import Typography from '@theme/Typography';
import { isAndroid } from '@utils/native';
import { BlurView } from 'expo-blur';
import { Cardholder, CurrencyEth, GasPump, Users, UserCircleGear } from 'phosphor-react-native';
import { useEffect, useState } from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import styled from 'styled-components/native';
import { useTheme } from 'styled-components/native';
import { UserInfoType } from 'types/apiTypes';

const { Navigator, Screen } = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === 'dark';
  const theme = useTheme();

  const [accountInfo, setAccountInfo] = useState<UserInfoType>();

  const getAccountInfo = async () => {
    const response = await getUserInfo();
    if (response.status === 200) setAccountInfo(response.data);
  };

  useEffect(() => {
    getAccountInfo();
  }, []);

  return (
    <Navigator
      initialRouteName="지갑"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isAndroid() ? theme.cardColor : 'transparent',
          borderRadius: 40,
          padding: 10,
          height: 90,
          position: 'absolute',
          overflow: 'hidden',
        },
        tabBarBackground: () => (
          <BlurView
            tint={isDark ? 'dark' : 'light'}
            intensity={30}
            style={StyleSheet.absoluteFill}
          />
        ),
      }}
    >
      <Screen
        name="지갑"
        component={Wallet}
        initialParams={{ accountInfo: accountInfo }}
        options={{
          header: WalletHeader,
          headerBackground: () => (
            <BlurView
              tint={isDark ? 'dark' : 'light'}
              intensity={30}
              style={StyleSheet.absoluteFill}
            />
          ),
          headerTransparent: true,
          tabBarIcon: ({ color, size }) => {
            return <Cardholder color={color} size={size} />;
          },
        }}
      />
      <Screen
        name="예약송금"
        component={() => <Send address="" />}
        options={{
          headerShown: true,
          tabBarIcon: ({ color, size }) => {
            return <GasPump color={color} size={size} />;
          },
        }}
      />

      <Screen
        name="송금"
        component={() => <Send address="" />}
        options={{
          headerShown: true,
          tabBarIcon: ({ color, size }) => {
            return <CurrencyEth color={color} size={size} />;
          },
        }}
      />
      <Screen
        name="Friends"
        component={Friends}
        options={{
          headerShown: false,
          title: '친구',
          tabBarIcon: ({ color, size }) => {
            return <Users color={color} size={size} />;
          },
        }}
      />
      <Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
          title: '설정',
          tabBarIcon: ({ color, size }) => {
            return <UserCircleGear color={color} size={size} />;
          },
        }}
      />
    </Navigator>
  );
};

export default Tabs;

const TmpView = styled.ScrollView``;
