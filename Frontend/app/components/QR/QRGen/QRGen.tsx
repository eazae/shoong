// yarn add react-native-svg react-native-qrcode-svg

// https://github.com/awesomejerry/react-native-qrcode-svg

import React from 'react';
import QRCode from 'react-native-qrcode-svg';

interface QRGenProps {
    address: string;
}

const QRGen: React.FC<QRGenProps> = ({ address }) => {

    return (
        <QRCode
            value={address}
        />
    );
}
export default QRGen;

