
import { ScrollView, Text } from 'react-native';
import React from 'react';
import EasySendAndReceive from '@containers/EasySendAndReceive';
import QRGen from '@components/QR/QRGen/QRGen';
import { ScanScreen } from '@components/QR/QRScan/QRScan';

interface SendProps {
    address: string | null;
}

const Send: React.FC<SendProps> = ({ address }) => {
    return (
        <ScrollView>
            <Text>{address}</Text>
            <EasySendAndReceive address={address} />
            {/* 
            <QRGen address="https://edu.ssafy.com/edu/main/index.do" />
            <ScanScreen />
             */}
        </ScrollView>
    );
};

export default Send;
