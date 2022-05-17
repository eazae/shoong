import AddFriendsButton from '@containers/Friends/AddFriendsButton.tsx/AddFriendsButton';
import FriendsList from '@containers/Friends/FriendsList/FriendsList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styled from 'styled-components/native';

const FriendsHome: React.FC<NativeStackScreenProps<any, 'Friends'>> = ({ navigation }) => {
  return (
    <>
      <FriendsList />
      <AddFriendsButton navigation={navigation} />
    </>
  );
};

export default FriendsHome;
