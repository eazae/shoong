import Button from "@components/common/Button"
import TextButton from "@components/common/TextButton/TextButton"
import { Text, View } from "react-native"

export const SendConfirm = () => {
    return (
        <View>
            <Text>송금 확인</Text>
            <TextButton title="송금 요청을 취소하고 싶어요!" />
            <Button title="확 인" onPress={() => { console.log('메인화면으로 넘기기?') }} />
        </View>
    )
}