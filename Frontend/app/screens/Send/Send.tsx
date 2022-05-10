
import { ScrollView, Text, View } from 'react-native';
import React, { useState } from 'react';
import EasySendAndReceive from '@containers/EasySendAndReceive';
import QRGen from '@components/QR/QRGen/QRGen';
import { ScanScreen } from '@components/QR/QRScan/QRScan';
import ExpandableView from '@containers/ExpandableView';
import Button from '@components/common/Button';

interface SendProps {
    address: string | undefined;
}
interface ExpandProp {
    width: string;
    height: string;
}

const WIDTH = '100%';
const HEIGHT = '300px';
const FOLDED = '0px';

const Send: React.FC<SendProps> = ({ address }) => {
    const [card, setCard] = useState({
        width: WIDTH,
        height: HEIGHT
    });
    const [target, setTarget] = useState({
        width: FOLDED,
        height: FOLDED
    });
    const [token, setToken] = useState({
        width: FOLDED,
        height: FOLDED
    });
    const [amount, setAmount] = useState({
        width: FOLDED,
        height: FOLDED
    });
    const expnadSwitch = (val: ExpandProp) => {
        let width;
        let height;
        if (val.width === FOLDED) {
            //펼치기
            width = WIDTH;
            height = HEIGHT
        }
        else {
            //접기
            width = FOLDED;
            height = FOLDED;
        }
        if (val === card) {
            setCard({
                width: width,
                height: height,
            });
        }
        else if (val === target) {
            setTarget({
                width: width,
                height: height,
            });
        }
        else if (val === token) {
            setToken({
                width: width,
                height: height,
            });
        }
        else {
            setAmount({
                width: width,
                height: height,
            })
        }
    };
    if (address) {
        expnadSwitch(card);
        expnadSwitch(target);
    }
    return (
        <ScrollView nestedScrollEnabled={true}>
            <Button title='송금 카드 선택' onPress={() => { expnadSwitch(card) }} />
            <ExpandableView width={card.width} height={card.height}>
                <Text>송금 카드 선택</Text>
            </ExpandableView>
            <Button title='송금 대상 선택' onPress={() => { expnadSwitch(target) }} />
            <ExpandableView width={target.width} height={target.height}>
                <View>
                    <EasySendAndReceive address={address} />
                </View>
            </ExpandableView>
            <Button title='토큰 종류 선택' onPress={() => { expnadSwitch(token) }} />
            <ExpandableView width={token.width} height={token.height}>
                <Text>토큰선택</Text>
            </ExpandableView>
            <Button title='송금 수량 입력' onPress={() => { expnadSwitch(amount) }} />
            <ExpandableView width={amount.width} height={amount.height}>
                <Text>수량선택</Text>
            </ExpandableView>
        </ScrollView >
    );
};

export default Send;



