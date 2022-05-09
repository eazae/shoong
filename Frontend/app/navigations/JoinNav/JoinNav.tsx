import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Join from '@screens/Join';
import { IJoin } from '@screens/Join/Join.props';
import JoinCreateOrLoad from '@screens/Join/JoinCreateOrLoad';
import JoinCustom from '@screens/Join/JoinCustom';
import JoinMnemonic from '@screens/Join/JoinMnemonic';
import JoinMnemonicIntroduce from '@screens/Join/JoinMnemonicIntroduce';
import { FormProvider, useForm } from 'react-hook-form';

const { Navigator, Screen } = createNativeStackNavigator();

const JoinNav = () => {
  const forms = useForm<IJoin>();
  return (
    <FormProvider {...forms}>
      <Navigator
        screenOptions={{ presentation: 'modal', headerShown: false }}
        initialRouteName="Join"
      >
        <Screen name="JoinMain" component={Join} />
        <Screen name="JoinCustom" component={JoinCustom} />
        <Screen name="JoinCreateOrLoad" component={JoinCreateOrLoad} />
        <Screen name="JoinMnemonic" component={JoinMnemonic} />
        <Screen name="JoinMnemonicIntroduce" component={JoinMnemonicIntroduce} />
      </Navigator>
    </FormProvider>
  );
};

export default JoinNav;
