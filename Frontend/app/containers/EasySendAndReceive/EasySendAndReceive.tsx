import Dropdown from "@components/common/Dropdown";
import Input from "@components/common/Input";
import QRGen from "@components/QR/QRGen/QRGen";
import { ScanScreen } from "@components/QR/QRScan/QRScan";
import React, { useEffect, useState } from "react"
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
    const [label, setLabel] = useState(String);
    const [value, setValue] = useState(String);
    const getLabel = (label: string) => {
        setLabel(label);
    };
    useEffect(() => {
        console.log(label);
    }, [label])
    return (
        <View>
            <Dropdown items={itemList} onChange={getLabel} />
            {label === 'QR' && (<ScanScreen />)}
            {label === '친구' && (
                <View>
                    <Text>친구 선택 창</Text>
                </View>)}
            {label === '지갑주소' && (
                <View>
                    <Input label="지갑주소" placeholder="지갑주소" onChange={() => { console.log(); }} />
                </View>)}
            {label === '닉네임' && (<View>
                <Input label="닉네임" placeholder="닉네임" onChange={() => { console.log(); }} />
            </View>)}
            {label === '전화번호' && (<View>
                <Input label="전화번호" placeholder="전화번호" onChange={() => { console.log(); }} type='phone-pad' />
            </View>)}
            {/* 
                
                받아온 value를 어디다가 저장 하고, Send 에서 송금 버튼 누를 때 axios 요청 들어가야 되는데
                emit으로 올릴지? 고민
                
            
            */}
        </View>
    );
}

export default EasySendAndReceive;