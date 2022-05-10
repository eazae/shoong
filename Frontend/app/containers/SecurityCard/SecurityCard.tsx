import MnemonicCard from '@components/layout/MnemonicCard';
import Typography from '@theme/Typography';
import { LayOut, Title } from './SecurityCard.styled';
import { useEffect, useState } from 'react';
import Button from '@components/common/Button/Button';
import { Key } from 'phosphor-react-native';
import Color from '@theme/Color';
import { generateMnemonic } from './SecurityCardHooks';

const SecurityCard = () => {
  const [mnemonicWords, setMnemonicWords] = useState<string[]>([]);
  useEffect(() => {
    generateMnemonic().then((res) => {
      setMnemonicWords(res.split(' '));
    });
  }, []);
  return (
    <LayOut>
      <Title>
        <Typography weight="regular">일련번호 SHOONG - ID</Typography>
      </Title>
      <MnemonicCard mnemonicWords={mnemonicWords} />
      <Button
        icon={<Key color={Color.textColor.light} />}
        title="보안카드 인증하러 가기"
        variant="primary"
        onPress={() => console.log('어디로 가지')}
      />
    </LayOut>
  );
};

export default SecurityCard;
