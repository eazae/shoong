import MnemonicCard from '@components/layout/MnemonicCard';
import Typography from '@theme/Typography';
import { LayOut, Privacy, PrivacySep, Title } from './SecurityCard.styled';
import { useEffect, useState } from 'react';
import Button from '@components/common/Button/Button';
import { EyeSlash, Key } from 'phosphor-react-native';
import Color from '@theme/Color';
import { generateMnemonic } from './SecurityCardHooks';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import Size from '@theme/Typography/Size';
import { useTheme } from 'styled-components';

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
  const [privacyMode, setPrivacyMode] = useState(true);

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
      {privacyMode ? (
        <Privacy>
          <EyeSlash size={Size.h1} color={useTheme().textColor} />
          <PrivacySep />
          <Typography size="body1" weight="regular">
            보안카드 기록 전 주변을 확인하세요
          </Typography>
          <Typography size="body3">다른 사람이 없으면 버튼을 누르세요</Typography>
          <PrivacySep />
          <Button
            onPress={() => {
              setPrivacyMode(false);
            }}
            variant="error"
            title="보기"
          />
        </Privacy>
      ) : (
        <MnemonicCard mnemonicWords={mnemonicWords} />
      )}
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
