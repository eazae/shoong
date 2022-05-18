
import { ScrollView, Text, View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import React, { useEffect, useState } from 'react';
import EasySendAndReceive from '@containers/EasySendAndReceive';
import ExpandableView from '@containers/ExpandableView';
import Button from '@components/common/Button';
import { SendConfirm } from './SendConfirm';
import SelectToken from '@containers/SelectToken';
import { theme } from '@storybook/react-native/dist/preview/components/Shared/theme';
import Typography from '@theme/Typography';
import { useTheme } from 'styled-components';
import { useLinkProps, useNavigation } from '@react-navigation/native';
import Input from '@components/common/Input';
import styled from 'styled-components/native';


interface SendProps {
    address: string;
}
interface ExpandProp {
    width: string;
    height: string;
}
interface IType {
    type: string;
    value: string;
}

const defaultAddress = "";
const Send: React.FC<SendProps> = ({ address }) => {
    const [card, setCard] = useState({
        width: WIDTH,
        height: HEIGHT
    });
    const [target, setTarget] = useState({
        width: FOLDED,
        height: FOLDED
    });
    const [tokenFlag, setTokenFlag] = useState({
        width: FOLDED,
        height: FOLDED
    });
    const [amountFlag, setAmountFlag] = useState({
        width: FOLDED,
        height: FOLDED
    });
    const [visible, setVisible] = useState(false);
    const [nick, setNick] = useState("");
    const [phone, setPhone] = useState("");
    const addr = "" + address;
    const [fromAddress, setFromAddress] = useState("");
    useEffect(() => {
        if (address) {
            setFromAddress(address);
            expnadSwitch(target);
        }
    }, [])
    const [to, setTo] = useState("");
    const [price, setPrice] = useState(0);
    const [token, setToken] = useState("");
    const [amount, setAmount] = useState("");
    //토큰
    //수량

    const expnadSwitch = (val: ExpandProp) => {
        const list = [card, target, tokenFlag, amountFlag];
        const setList = [setCard, setTarget, setTokenFlag, setAmountFlag];
        for (let i = 0; i < list.length; i++) {
            if (list[i] === val) {
                setList[i]({
                    width: WIDTH,
                    height: HEIGHT
                });
            }
            else
                setList[i]({
                    width: FOLDED,
                    height: FOLDED
                });
        }
    };

    const goConfirm = () => {
        //트랜잭션 id 들고 페이지 넘기기 
        //트랜잭션 요청 후 트랜잭션 id 가지고 다음 페이지로 이동
        navigate('Send', { screen: 'SendConfirm' });
    };
    const getType = (props: IType) => {
        if (!props) return;
        if (props.type === '전화번호') {
            setPhone(props.value);
            setNick("");
        }
        else if (props.type === '닉네임') {
            setNick(props.value);
            setPhone("");
        }
        setTo("");
    };
    const getTo = (to: string) => {
        setTo(to);
        console.log(to);
    }
    const { navigate } = useNavigation();
    return (
        <ScrollView nestedScrollEnabled={true} >
            <Button title='송금 카드 선택' onPress={() => { expnadSwitch(card) }} />
            <ExpandableView width={card.width} height={card.height}>
                <Text>11</Text>
                {/* 카드 선택  */}
                {/* from */}
            </ExpandableView>
            <Button title='송금 대상 선택' onPress={() => { expnadSwitch(target) }} />
            <ExpandableView width={target.width} height={target.height}>
                <EasySendAndReceive address={to} setAddress={getTo} setType={getType} />
            </ExpandableView>
            <Button title='토큰 종류 선택' onPress={() => { expnadSwitch(tokenFlag) }} />
            <ExpandableView width={tokenFlag.width} height={tokenFlag.height}>
                {/* <SelectToken /> */}
                {/* token */}
            </ExpandableView>
            <Button title='송금 수량 입력' onPress={() => { expnadSwitch(amountFlag) }} />
            <ExpandableView width={amountFlag.width} height={amountFlag.height}>
                {/* 송금 수량 입력 */}
                {/* amount */}
                <Input label="송금 수량" placeholder="수량 입력" type='numeric' onChange={(e) => { (console.log(e)) }} />
                <Won>{price}원</Won>
            </ExpandableView>
            <Button title='송 금' onPress={() => { setVisible(true); }} />
            {
                visible === true && (
                    <SendModal>
                        <Typography size='body1'>송금내용을 확인할게요!</Typography>
                        <Typography size='body3'>{nick !== "" && nick}</Typography>
                        <Typography size='body3'>{phone !== "" && phone}</Typography>
                        <Typography size='body3'>{nick === "" && phone === "" && to.substring(0, 7) + "..."}</Typography>
                        <Typography size='body3'>님에게</Typography>
                        <Typography size='body3'>{token} 토큰</Typography>
                        <Typography size='body3'>{amount}개 보낼게요!</Typography>
                        <Button title='네 맞아요!' onPress={() => {
                            goConfirm();
                        }}></Button>
                        <TouchableWithoutFeedback onPress={() => { setVisible(false) }}>
                            <Close source={{ uri: 'https://user-images.githubusercontent.com/63468607/168971504-42ef3187-9a86-4266-abc5-9f3e5c8d0b4b.png' }}
                            />
                        </TouchableWithoutFeedback>
                    </SendModal>)
            }
        </ScrollView >
    );
};

export default Send;

const WIDTH = '100%';
const HEIGHT = '300px';
const FOLDED = '0px';

const styles = StyleSheet.create({
    send: {
        position: 'absolute', backgroundColor: theme.backgroundColor, width: '80%',
        alignItems: 'center', top: '25%', left: '10%', height: 400, zIndex: 999
    },

})

const Won = styled.Text`
  color: ${({ theme }) => theme.textColor};
`;

const SendModal = styled.View`
  position  : absolute;
  background-color: ${({ theme }) => theme.mainBgColor};
border: 1px solid black;
width: 80%;
align-items: center;
top: 25%;
left: 10%;
height: 60%;
z-index: 999;
overflow: hidden;
`;

const Close = styled.Image`
width: 25px;
height: 25px;
top: 5%;
right: 5%;
position: absolute;
`;