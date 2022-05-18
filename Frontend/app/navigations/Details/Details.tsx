import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CardDetail from '@screens/CardDetail';

const { Navigator, Screen } = createNativeStackNavigator();

const Details = () => {
  return (
    <Navigator screenOptions={{ headerShadowVisible: false }}>
      <Screen name="CardDetail" component={CardDetail} />
    </Navigator>
  );
};

export default Details;
