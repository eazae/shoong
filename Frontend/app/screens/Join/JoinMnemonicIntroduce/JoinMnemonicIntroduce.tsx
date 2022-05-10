import Button from '@components/common/Button';
import HeaderGoBackBtn from '@components/item/HeaderGoBackBtn';
import { useNavigation } from '@react-navigation/native';
import { LayOut } from '@screens/Login/Login.styled';
import Color from '@theme/Color';
import Size from '@theme/Typography/Size';
import { ArrowRight } from 'phosphor-react-native';
import styled from 'styled-components/native';
import Instruction from '../Instruction';

const messageHeader = [
  '당신의 지갑을 지킬 방패,',
  '니모닉을 아시나요?',
  '니모닉은 가상자산을 지키는',
  '일종의 보안카드에요',
];

const messageBottom = ['SHOONG이', '조합한 12개의 단어로', '당신의 지갑을 보호하세요'];

const JoinMnemonicIntroduce = () => {
  const { navigate } = useNavigation();
  return (
    <>
      <HeaderGoBackBtn />
      <LayOut>
        <Instruction messages={messageHeader} />
        <Seperator />
        <Instruction messages={messageBottom} />
        <Seperator />
        <Button
          onPress={() => navigate('Join', { screen: 'JoinMnemonic' })}
          icon={<ArrowRight size={Size.body1} color={Color.textColor.light} />}
          title="다음"
        />
      </LayOut>
    </>
  );
};

const Seperator = styled.View`
  height: 20px;
`;

export default JoinMnemonicIntroduce;
