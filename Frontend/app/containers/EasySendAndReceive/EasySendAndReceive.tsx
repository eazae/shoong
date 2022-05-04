import React from "react"
import { Text, View } from "react-native";


interface EasySendAndReceiveProps {
    address: string | null;
}

const EasySendAndReceive: React.FC<EasySendAndReceiveProps> = ({ address }) => {

    return (
        <View>
            {
                address ? null : (
                    <View>
                        <Text>
                            여기에 대상 선택
                        </Text>
                    </View>
                )
            }
        </View>
    );
}

export default EasySendAndReceive;