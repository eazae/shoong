import Color from '@theme/Color';
import { QrCode } from 'phosphor-react-native';
import { useColorScheme } from 'react-native';
import styled from 'styled-components/native';

const ICChip = () => {
  return (
    <LayOut>
      <QrCode color={useColorScheme() === 'dark' ? Color.borderColor.dark : 'white'} />
    </LayOut>
  );
};

const LayOut = styled.View`
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.mainBgColor};
  background-color: gold;
  width: 33px;
  height: 44px;
  border-radius: 6px;
`;

export default ICChip;
