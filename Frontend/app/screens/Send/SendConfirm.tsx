import Button from "@components/common/Button"
import TextButton from "@components/common/TextButton/TextButton"
import { useState } from "react"
import { Text, View } from "react-native"

export const SendConfirm = () => {
    const [cancle, setCancle] = useState(false);
    return (
        <View>
            <Text>송금 확인</Text>
            <TextButton title="송금 요청을 취소하고 싶어요!" onPress={() => { setCancle(true) }} />
            <Text style={{ color: 'red' }}>(요청 취소 시 별도의 수수료가 들 수 있어요!)</Text>
            <Button title="확 인" onPress={() => { }} />
        </View>
    )
}