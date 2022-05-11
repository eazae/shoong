import Button from '@components/common/Button';
import MnemonicBadge from '@components/item/MnemonicBadge';
import MnemonicCard from '@components/layout/MnemonicCard';
import { LayOut, Title } from '@containers/SecurityCard/SecurityCard.styled';
import Color from '@theme/Color';
import Typography from '@theme/Typography';
import { ShieldCheck } from 'phosphor-react-native';
import React, { useState } from 'react';
import styled from 'styled-components/native';

interface SCVProps {
  mnemonicWords: readonly string[];
  shuffledMnemonics: readonly string[];
}

const SecurityCardVerify = ({ mnemonicWords, shuffledMnemonics }: SCVProps) => {
  const [ansWords, setAnsWords] = useState<string[]>([]);
  const isNotReady = ansWords[11] === undefined;

  return (
    <LayOut>
      <Title>
        <Typography weight="regular">일련번호 SHOONG - VERIFY</Typography>
      </Title>
      <MnemonicCard mnemonicWords={ansWords} />
      <Sep />
      <Selections>
        {[0, 1, 2].map((col) => (
          <Col key={'refill' + col}>
            {[0, 1, 2, 3].map((row) => {
              const [isClicked, setIsClicked] = useState(false);
              const idx = col * 4 + row;
              const word = shuffledMnemonics[idx];
              return (
                <BadgeBtn
                  disabled={isClicked}
                  onPress={() => {
                    setIsClicked(true);
                    setAnsWords([...ansWords, word]);
                  }}
                >
                  <MnemonicBadge
                    variant={word === undefined ? 'dashed' : 'solid'}
                    key={'mnemonic' + (col * 4 + row)}
                  >
                    {word}
                  </MnemonicBadge>
                </BadgeBtn>
              );
            })}
          </Col>
        ))}
      </Selections>
      <Sep />
      <Button
        disabled={isNotReady}
        onPress={() => {
          let criterion = true;
          for (let i = 0; i < 12; i++) {
            criterion = ansWords[i] === mnemonicWords[i];
            if (!criterion) {
              alert('니모닉 구문이 일치하지 않아요\n니모닉 구문을 다시 확인해주세요');
              return;
            }
          }
          alert('good!');
        }}
        icon={<ShieldCheck color={Color.textColor.light} />}
        title="지갑 생성 마무리하기"
        variant={isNotReady ? 'disabled' : 'primary'}
      />
    </LayOut>
  );
};

const Sep = styled.View`
  height: 10px;
`;

const Selections = styled.View`
  height: 150px;
  flex-direction: row;
  justify-content: space-between;
`;

const Col = styled.View`
  justify-content: space-between;
  width: 31%;
`;

const BadgeBtn = styled.TouchableOpacity`
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
`;

export default SecurityCardVerify;
