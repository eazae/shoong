import StrippedInput from '@components/common/StrippedInput/StrippedInput';
import { getCoinPrice } from '@services/api/token/tokenAPI';
import { CoinType, TokenSymbol } from '@services/api/token/tokenTypes';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  display: flex;
  flex-direction: column;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: baseline;
`;

const Currency = styled.Text`
  color: ${({ theme }) => theme.textDisabledColor};
  padding-bottom: 5px;
  font-weight: 500;
`;

const KRWConverted = styled.Text`
  padding-left: 16px;
  color: ${({ theme }) => theme.primaryLightColor};
`;

interface AmountInputProps {
  amount: string;
  setAmount: any;
  token: CoinType;
}

const AmountInput = ({ amount, setAmount, token }: AmountInputProps) => {
  // 1개 토큰 당 원화 가격
  const [KRWPrice, setKRWPrice] = useState<number>(0);
  // 송금 수량을 원화로 변환한 가격
  const [convertedAmount, setConvertedAmount] = useState<number>(0);

  const convertToKRW = async () => {
    const krw = await getCoinPrice(token);
    setKRWPrice(krw);
  };

  useEffect(() => {
    if (token) convertToKRW();
  }, [token]);

  useEffect(() => {
    setConvertedAmount(Number(amount) * KRWPrice);
  }, [amount]);

  console.log(amount);

  return (
    <Container>
      <Row>
        <StrippedInput
          placeholder="수량 입력"
          keyboardType="numeric"
          presetValue={amount}
          setValue={setAmount}
        />
        <Currency>{token ? TokenSymbol[token] : ''}</Currency>
      </Row>
      {amount ? <KRWConverted>약 {convertedAmount.toLocaleString()}₩</KRWConverted> : null}
    </Container>
  );
};

export default AmountInput;
