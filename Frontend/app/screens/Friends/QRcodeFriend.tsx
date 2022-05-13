import { ScanScreen } from '@components/QR/QRScan/QRScan';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components/native';

const QRcodeFriend: React.FC<NativeStackScreenProps<any, 'Friends'>> = ({ navigation }) => {
  const theme = useTheme();

  return (
    <>
      <ScanScreen />
    </>
  );
};

export default QRcodeFriend;
