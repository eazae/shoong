// yarn add react-native-camera
// yarn add react-native-permissions
// yarn add react-native-qrcode-scanner

// https://www.npmjs.com/package/react-native-qrcode-scanner

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

interface ScanScreenProps {
    onScan: (...event: any[]) => void;
}

const ScanScreen: React.FC<ScanScreenProps> = ({ onScan }) => {
    const onSuccess = (e: any) => {
        onScan(e.data)
    };
    return (
        <QRCodeScanner
            onRead={onScan}
            flashMode={RNCamera.Constants.FlashMode.torch}
        />
    )
};

export default ScanScreen;


