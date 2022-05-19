import Button from '@components/common/Button';
import { CardApiProps } from '@components/item/Card/Card.props';
import MnemonicBadge from '@components/item/MnemonicBadge';
import MnemonicCard from '@components/layout/MnemonicCard';
import { LayOut, Title } from '@containers/SecurityCard/SecurityCard.styled';
import {
  carPOSTapi,
  getCardByMnemonic,
  storeCardKeys,
} from '@containers/SecurityCard/SecurityCardHooks';
import { useNavigation } from '@react-navigation/native';
import Color from '@theme/Color';
import Typography from '@theme/Typography';
import { Check, ShieldCheck } from 'phosphor-react-native';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useFormContext } from 'react-hook-form';
import { login } from '@services/api/user/userAPI';
import { IJoin } from '@screens/Join/Join.props';
import { defaultCardBg } from '@containers/CardLarge/CardLarge';
import * as SecureStore from 'expo-secure-store';
import Modal from '@components/common/Modal/Modal';

interface SCVProps {
  mnemonicWords: readonly string[];
  shuffledMnemonics: readonly string[];
}

const SecurityCardVerify = ({ mnemonicWords, shuffledMnemonics }: SCVProps) => {
  const [ansWords, setAnsWords] = useState<string[]>([]);
  const isNotReady = ansWords[11] === undefined;
  const [isSuccess, setIsSuccess] = useState(false);
  const { getValues } = useFormContext<IJoin>();

  const { navigate } = useNavigation();

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
                  key={'badgeIDX' + idx}
                  disabled={isClicked}
                  onPress={() => {
                    setIsClicked(true);
                    setAnsWords([...ansWords, word]);
                  }}
                >
                  <MnemonicBadge
                    variant={word === undefined ? 'dashed' : 'solid'}
                    key={'mnemonic' + idx}
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
        onPress={async () => {
          let criterion = true;
          for (let i = 0; i < 12; i++) {
            criterion = ansWords[i] === mnemonicWords[i];
            if (!criterion) {
              alert('니모닉 구문이 일치하지 않아요\n니모닉 구문을 다시 확인해주세요');
              return;
            }
          }
          getCardByMnemonic(0, ansWords).then((card) => {
            const { card_address } = card!;
            const data: CardApiProps = {
              card_address,
              card_name: `내 카드 ${0 + 1}`,
              card_profile_image: defaultCardBg,
            };

            const email = getValues('email');
            const passWord = getValues('passWord');
            login({ email, passWord }).then(() => {
              carPOSTapi(data)
                .then(() => {
                  SecureStore.deleteItemAsync('Cards');
                  storeCardKeys(card).then(() => {
                    setIsSuccess(true);
                  });
                })
                .catch((err) => alert(err));
            });
          });
        }}
        icon={<ShieldCheck color={Color.textColor.light} />}
        title="지갑 생성 마무리하기"
        variant={isNotReady ? 'disabled' : 'primary'}
      />
      <Modal
        modalVisible={isSuccess}
        modalTitle={'축하합니다!'}
        content={`재확인에 성공했습니다\n   다음으로 넘어가기`}
        buttonIcon={<Check color={Color.textColor.light} />}
        onModalClosed={() => {
          navigate('Join', { screen: 'JoinSuccess' });
          setIsSuccess(false);
        }}
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
