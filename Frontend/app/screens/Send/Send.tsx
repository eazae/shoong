
import { ScrollView, Text, View } from 'react-native';
import React, { useState } from 'react';
import EasySendAndReceive from '@containers/EasySendAndReceive';
import QRGen from '@components/QR/QRGen/QRGen';
import { ScanScreen } from '@components/QR/QRScan/QRScan';
import ExpandableView from '@containers/ExpandableView';
const expand = (size) => {
    if (size.width === '0px') {
        size.width = '100%';
        size.height = '300px';
    }
    else {
        size.width = '0px';
        size.height = '0px';
    }
}

interface SendProps {
    address: string | undefined;
}

const Send: React.FC<SendProps> = ({ address }) => {
    const [target, setTarget] = useState({
        width: '100%',
        height: '300px'
    });
    const [token, setToken] = useState({
        width: '0px',
        height: '0px'
    });
    const [amount, setAmount] = useState({
        width: '0px',
        height: '0px'
    });

    if (address) {
        expand(target);
        expand(token);
    }
    return (
        <View>
            <ExpandableView width={target.width} height={target.height}>
                <EasySendAndReceive address={address}></EasySendAndReceive>
            </ExpandableView>
            <ExpandableView width={token.width} height={token.height}>
                <Text>토큰선택</Text>
            </ExpandableView>
            <ExpandableView width={amount.width} height={amount.height}>
                <Text>수량선택</Text>
            </ExpandableView>
            {/* <Text>{address}</Text> */}
            {/* <EasySendAndReceive address={address} /> */}
            {/* <QRGen address="https://edu.ssafy.com/edu/main/index.do" />
            <ScanScreen /> */}
            <Text>왜..</Text>
        </View >
    );
};

export default Send;



