import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FriendsHome from './FriendsHome';

const { Navigator, Screen } = createNativeStackNavigator();

const Friends = () => {
  return (
    <>
      <Navigator initialRouteName="친구" screenOptions={{ headerBackTitleVisible: false }}>
        <Screen name="친구" component={FriendsHome} />
      </Navigator>
    </>
  );
};

export default Friends;
