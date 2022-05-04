import MnemonicCard from '@components/layout/MnemonicCard';
import Typography from '@theme/Typography';
import { LayOut, Title, TmpButton } from './SecurityCard.styled';

// https://github.com/bitcoin/bips/blob/master/bip-0039/korean.txt
const mnemonicWords = [
  '가격',
  '가끔',
  '가난',
  '가뭄',
  '가방',
  '가상',
  '동화책',
  '뒷산',
  '막걸리',
  '무관심',
  '삼계탕',
  '세종대왕',
];

const SecurityCard = () => {
  return (
    <LayOut>
      <Title>
        <Typography>일련번호 SHOONG - ID</Typography>
      </Title>
      <MnemonicCard mnemonicWords={mnemonicWords} />
      <TmpButton />
    </LayOut>
  );
};

export default SecurityCard;
