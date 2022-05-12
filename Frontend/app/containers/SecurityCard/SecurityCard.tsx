import MnemonicCard from '@components/layout/MnemonicCard';
import Typography from '@theme/Typography';
import { LayOut, Title } from './SecurityCard.styled';
import { useEffect, useState } from 'react';
import Button from '@components/common/Button/Button';
import { Key } from 'phosphor-react-native';
import Color from '@theme/Color';
import { generateMnemonic } from './SecurityCardHooks';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

function shuffleArray(array: string[]) {
  const arr = array.slice();
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const SecurityCard = () => {
  const [mnemonicWords, setMnemonicWords] = useState<string[]>([]);
  const [shuffledMnemonics, setShuffledMnemonics] = useState<string[]>([]);

  useEffect(() => {
    generateMnemonic().then((res) => {
      const words = res.split(' ');
      setMnemonicWords(() => words);
      const shuffled = shuffleArray(words);
      setShuffledMnemonics(() => shuffled);
    });
  }, []);

  const { navigate } = useNavigation();
  return (
    <LayOut>
      <Title>
        <Typography weight="regular">일련번호 SHOONG - ID</Typography>
      </Title>
      <MnemonicCard mnemonicWords={mnemonicWords} />
      <Sep />
      <Button
        icon={<Key color={Color.textColor.light} />}
        title="보안카드 인증하러 가기"
        variant="primary"
        onPress={() =>
          navigate('Join', {
            screen: 'JoinMnemonicVerification',
            params: { mnemonicWords, shuffledMnemonics },
          })
        }
      />
    </LayOut>
  );
};

const Sep = styled.View`
  height: 12px;
`;

export default SecurityCard;
