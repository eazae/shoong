import Button from "@components/common/Button"
import TextButton from "@components/common/TextButton/TextButton"
import { useNavigation } from "@react-navigation/native";
import { useState } from "react"
import { Image, Text, View } from "react-native"
import styled from "styled-components/native";

interface SendConfirmProps {
    transaction: string;
}


export const SendConfirm: React.FC<SendConfirmProps> = (transaction) => {
    const { navigate } = useNavigation();
    const [cancle, setCancle] = useState(false);
    const goMain = () => {
        console.log("찍힘");
        navigate('Tabs', { screen: '지갑' });
    };
    return (
        <View>
            <Text>송금 확인</Text>
            <TextButton title="송금 요청을 취소하고 싶어요!" onPress={() => { setCancle(true) }} />
            <Text style={{ color: 'red' }}>(요청 취소 시 별도의 수수료가 들 수 있어요!)</Text>
            <Check source={{ uri: 'https://user-images.githubusercontent.com/63468607/168994200-5966cd13-660e-42b3-aad8-be3e77fc4eef.png' }} resizeMode="contain" />
            <Button title="확 인" onPress={() => { goMain() }} />
        </View>
    )
}

const Check = styled.Image`
    width: 80%;
    height: 80%;
    justify-content: center;
    align-items: center;
    margin: auto;
`;