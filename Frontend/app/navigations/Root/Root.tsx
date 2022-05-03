import Tab from '@navigations/Tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Nav = createNativeStackNavigator();

const Root = () => (
  <Nav.Navigator screenOptions={{ presentation: 'modal', headerShown: false }}>
    <Nav.Screen name="Tabs" component={Tab} />
  </Nav.Navigator>
);

export default Root;
