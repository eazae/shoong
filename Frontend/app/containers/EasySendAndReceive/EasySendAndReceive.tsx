import Dropdown from "@components/common/Dropdown";
import QRGen from "@components/QR/QRGen/QRGen";
import React, { useState } from "react"
import { Text, View } from "react-native";


interface EasySendAndReceiveProps {
    address: string | undefined;
}

const itemList = [
    { label: '지갑주소', value: '지갑주소' },
    { label: '친구', value: '친구' },
    { label: '닉네임', value: '닉네임' },
    { label: 'QR', value: 'QR' },
    { label: '전화번호', value: '전화번호' }
];


const EasySendAndReceive: React.FC<EasySendAndReceiveProps> = ({ address }) => {
    return (
        <View>
            {/* {
                address ? (
                    null
                ) : (
                    null
                )
            } */}
            <Dropdown items={itemList} />
            <QRGen address="1234" />
        </View>
    );
}

export default EasySendAndReceive;