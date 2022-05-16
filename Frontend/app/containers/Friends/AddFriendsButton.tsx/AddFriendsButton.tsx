import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ActionButton from 'react-native-action-button';
import { useTheme } from 'styled-components/native';
import { Phone, QrCode, Textbox } from 'phosphor-react-native';

interface AddFriendsButtonProps {
  navigation: NativeStackNavigationProp<any, 'Friends'>;
}

const AddFriendsButton = ({ navigation }: AddFriendsButtonProps) => {
  const theme = useTheme();

  return (
    <ActionButton buttonColor={theme.enabledColor} style={{ marginBottom: 100 }}>
      <ActionButton.Item
        buttonColor={theme.subColor}
        title="닉네임"
        onPress={() => {
          navigation.navigate('NicknameAdd');
        }}
      >
        {/* <IdentificationCard size={32} color="#ffffff" weight="duotone"  style={styles.actionButtonIcon} /> */}
        <Textbox size={32} color="white" weight="duotone" />
      </ActionButton.Item>
      <ActionButton.Item
        buttonColor={theme.subColor}
        title="전화번호"
        onPress={() => {
          navigation.navigate('PhoneAdd');
        }}
      >
        <Phone size={32} color="white" weight="duotone" />
      </ActionButton.Item>
      <ActionButton.Item
        buttonColor={theme.subColor}
        title="QR코드"
        onPress={() => {
          navigation.navigate('QRcodeAdd');
        }}
      >
        <QrCode size={32} color="white" weight="duotone" />
      </ActionButton.Item>
    </ActionButton>
  );
};

// const styles = StyleSheet.create({
//   actionButtonIcon: {
//     fontSize: 20,
//     height: 22,
//     color: 'white',
//   },
// });

export default AddFriendsButton;
