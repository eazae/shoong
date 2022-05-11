import Button from '@components/common/Button';
import { LayOut } from '@screens/Login/Login.styled';
import Color from '@theme/Color';
import { Cardholder } from 'phosphor-react-native';
import styled from 'styled-components/native';
import Instruction from '../Instruction';

const messages = ['계정정보 입력을', '성공적으로 마쳤어요', '연동할 지갑이 있으신가요?'];

const JoinCreateOrLoad = ({ navigation: { navigate } }) => {
  return (
    <>
      <LayOut>
        <Instruction messages={messages} />
        <Seperator />
        <Button variant="transparent" title="네, 제 지갑을 연동할게요" />
        <Button
          onPress={() => navigate('Join', { screen: 'JoinMnemonicIntroduce' })}
          icon={<Cardholder color={Color.textColor.light} />}
          title="지갑을 새로 생성하고 싶어요"
        />
      </LayOut>
    </>
  );
};

const Seperator = styled.View`
  height: 50px;
`;
export default JoinCreateOrLoad;
