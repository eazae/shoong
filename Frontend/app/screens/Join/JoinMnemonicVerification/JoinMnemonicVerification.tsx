import HeaderGoBackBtn from '@components/item/HeaderGoBackBtn';
import SecurityCardVerify from '@containers/SecurityCardVerify';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LayOut } from '@screens/Login/Login.styled';
import { useState } from 'react';
import styled from 'styled-components/native';
import Instruction from '../Instruction';

type SecurityCardParams = {
  params: {
    mnemonicWords: string[];
    shuffledMnemonics: string[];
  };
};

const messages = ['보안카드를', '재확인해주세요'];

const JoinMnemonicVerification: React.FC<NativeStackScreenProps<SecurityCardParams, 'params'>> = ({
  route: { params },
}) => {
  const { mnemonicWords, shuffledMnemonics } = params;
  return (
    <>
      <HeaderGoBackBtn />
      <LayOut>
        <Instruction messages={messages} />
        <Seperator />
        <SecurityCardVerify mnemonicWords={mnemonicWords} shuffledMnemonics={shuffledMnemonics} />
      </LayOut>
    </>
  );
};

export default JoinMnemonicVerification;

const Seperator = styled.View`
  height: 15px;
`;
