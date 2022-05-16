import JoinNav from '@navigations/JoinNav';
import Tabs from '@navigations/Tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '@screens/Login';
import { clearJWTValue, getJWTValue, setJWTValue } from '@utils/secureStore';
import { isLoggedState } from '@atoms/atoms';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

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
      initialRouteName={isLoggedIn ? 'Tabs' : 'LogIn'}
    >
      <Nav.Screen name="Tabs" component={Tabs} />
      <Nav.Screen name="LogIn" component={Login} />
      <Nav.Screen name="Join" component={JoinNav} />
    </Nav.Navigator>
  );
};

export default Root;
