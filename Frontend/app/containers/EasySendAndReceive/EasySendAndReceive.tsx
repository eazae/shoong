import Dropdown from "@components/common/Dropdown";
import Input from "@components/common/Input";
import ScanScreen from "@components/QR/QRScan/QRScan";
import React, { useEffect, useState } from "react"
import { Text, View } from "react-native";


interface EasySendAndReceiveProps {
    address: string;
    setAddress?: (...event: any[]) => void;
    setType?: (...event: any[]) => void;
}

const itemList = [
    { label: '지갑주소', value: '지갑주소' },
    { label: '친구', value: '친구' },
    { label: '닉네임', value: '닉네임' },
    { label: 'QR', value: 'QR' },
    { label: '전화번호', value: '전화번호' }
];


const EasySendAndReceive: React.FC<EasySendAndReceiveProps> = ({ address = "", setAddress, setType }) => {
    const [label, setLabel] = useState(String);
    const [value, setValue] = useState(String);
    const getLabel = (label: string) => {
        setLabel(label);
        setType(label);
    };
    useEffect(() => {
        console.log(label);
    }, [label])
    const [addr, setAddr] = useState("");
    const getAddr = (addr: string | undefined) => {
        if (addr !== undefined) setAddress(addr);
    }
    useEffect(() => {
        if (address !== "") setAddr(address);
    }, [])
    return (
        <View >
            <Dropdown items={itemList} onChange={getLabel} />
            {label === 'QR' && (<ScanScreen onScan={getAddr} />)}
            {label === '친구' && (
                <View>
                    <Text>친구 선택 창</Text>
                </View>)}
            {label === '지갑주소' && (
                <View>
                    <Input label="지갑주소" placeholder="지갑주소" onChange={(e) => setAddress(e)} />
                </View>)}
            {label === '닉네임' && (<View>
                <Input label="닉네임" placeholder="닉네임" onChange={(e) => { setType({ type: "닉네임", value: e }) }} />
            </View>)}
            {label === '전화번호' && (<View>
                <Input label="전화번호" placeholder="전화번호" onChange={(e) => { setType({ type: "전화번호", value: e }) }} type='phone-pad' />
            </View>)}
        </View>
    );
}

export default EasySendAndReceive;