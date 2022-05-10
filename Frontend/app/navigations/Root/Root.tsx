import JoinNav from '@navigations/JoinNav';
import Tab from '@navigations/Tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '@screens/Login';
import { clearJWTValue, getJWTValue, setJWTValue } from '@utils/secureStore';
import { isLoggedState } from '@atoms/atoms';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Alert } from 'react-native';

const Nav = createNativeStackNavigator();

const Root = () => {
  // test
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isLogged = useRecoilValue(isLoggedState);

  const checkLoggedIn = async () => {
    const data = await getJWTValue();
    console.log('JWT:', data);
    setIsLoggedIn(data !== null);
  };

  useEffect(() => {
    // 로그인 시 JWT 저장
    // setJWTValue('테스트');

    // 로그아웃 시 JWT 삭제
    // clearJWTValue();
    checkLoggedIn();
  }, [isLogged]);

  return (
    <Nav.Navigator
      screenOptions={{ presentation: 'modal', headerShown: false }}
      initialRouteName="LogIn"
    >
      {isLoggedIn ? (
        <Nav.Screen name="Tabs" component={Tab} />
      ) : (
        <>
          <Nav.Screen name="LogIn" component={Login} />
          <Nav.Screen name="Join" component={JoinNav} />
        </>
      )}
    </Nav.Navigator>
  );
};

export default Root;
