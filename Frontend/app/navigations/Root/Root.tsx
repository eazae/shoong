import JoinNav from '@navigations/JoinNav';
import Tabs from '@navigations/Tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '@screens/Login';
import { getJWTValue } from '@utils/secureStore';
import { isLoggedInState } from '@atoms/atoms';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { isJWTValid } from '@services/api/user/userAPI';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Nav = createNativeStackNavigator();

const Root = () => {
  // test
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  useEffect(() => {
    getJWTValue().then((jwt) => {
      isJWTValid(jwt || '').then((res) => {
        if (res.status === 200) {
          setIsLoggedIn(() => true);
        }
      });
      // .catch((err) => console.log('25', err));
    });
  }, []);

  return (
    <SafeAreaProvider>
      <Nav.Navigator screenOptions={{ presentation: 'modal', headerShown: false }}>
        {isLoggedIn ? (
          <Nav.Screen name="Tabs" component={Tabs} />
        ) : (
          <>
            <Nav.Screen name="LogIn" component={Login} />
            <Nav.Screen name="Join" component={JoinNav} />
          </>
        )}
      </Nav.Navigator>
    </SafeAreaProvider>
  );
};

export default Root;
