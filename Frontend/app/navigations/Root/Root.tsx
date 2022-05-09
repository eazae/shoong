import JoinNav from '@navigations/JoinNav';
import Tab from '@navigations/Tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '@screens/Login';
import { useState } from 'react';

const Nav = createNativeStackNavigator();

const Root = () => {
  // test
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
