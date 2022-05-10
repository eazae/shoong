import SecurityCard from '@containers/SecurityCard';
import { LayOut } from '@screens/Login/Login.styled';
import HeaderGoBackBtn from '@components/item/HeaderGoBackBtn';
import Instruction from '../Instruction';
import styled from 'styled-components/native';

const messages = ['당신 만의 보안카드,', '니모닉을 기록해두세요'];

const JoinMnemonic = () => {
  return (
    <>
      <HeaderGoBackBtn />
      <LayOut>
        <Instruction messages={messages} />
        <Seperator />
        <SecurityCard />
      </LayOut>
    </>
  );
};

const Seperator = styled.View`
  height: 15px;
`;

export default JoinMnemonic;
