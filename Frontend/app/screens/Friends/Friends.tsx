import TextButton from '@components/common/TextButton/TextButton';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FriendsHome from './FriendsHome';
import NicknameFriend from './NicknameFriend';
import PhoneFriend from './PhoneFriend';
import QRcodeFriend from './QRcodeFriend';

const { Navigator, Screen } = createNativeStackNavigator();

const Friends = () => {
  return (
    <>
      <Navigator initialRouteName="친구" screenOptions={{ headerBackTitleVisible: false }}>
        <Screen
          name="FriendHome"
          component={FriendsHome}
          options={{
            title: '친구 목록',
          }}
        />
        <Screen name="QRcodeAdd" component={QRcodeFriend} options={{ title: 'QR로 추가하기' }} />
        <Screen
          name="PhoneAdd"
          component={PhoneFriend}
          options={{ title: '전화번호로 추가하기' }}
        />
        <Screen
          name="NicknameAdd"
          component={NicknameFriend}
          options={{ title: '닉네임으로 추가하기' }}
        />
      </Navigator>
    </>
  );
};

export default Friends;
