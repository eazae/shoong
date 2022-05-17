import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Send from '@screens/Send';
import { SendConfirm } from '@screens/Send/SendConfirm';

const { Navigator, Screen } = createNativeStackNavigator();

const SendNav = () => {
    return (
        <Navigator
            screenOptions={{ presentation: 'modal', headerShown: false }}
            initialRouteName="SendMain"
        >
            <Screen name="SendMain" component={Send} />
            <Screen name="SendConfirm" component={SendConfirm} />
        </Navigator>
    );
};

export default SendNav;
