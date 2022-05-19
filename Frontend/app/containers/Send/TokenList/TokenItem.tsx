import Coin from '@components/common/Coin';
import Divider from '@components/common/Divider/Divider';
import { TokenName, TokenSymbol } from '@services/api/token/tokenTypes';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity<{ isSelected: boolean }>`
  background-color: ${(props) =>
    props.isSelected ? props.theme.disabledColor : props.theme.subBgColor};
  align-items: center;
  padding: 15px;
  margin: 5px;
  border-radius: 10px;
  border-color: ${(props) => props.theme.enabledColor};
  border-width: ${(props) => (props.isSelected ? '2px' : '0px')};
`;

// const TokenImage = styled.Image`
//   width: 100%;
//   align-items: center;
// `;

const Symbol = styled.Text`
  color: ${({ theme }) => theme.textColor};
  font-weight: 600;
`;

const Label = styled.Text`
  color: ${({ theme }) => theme.textDisabledColor};
  font-size: 12px;
`;

interface TokenItemProps {
  isSelected: boolean;
  uri: string;
  token: string;
  setSelectedToken: any;
  width: number;
}

const TokenItem = ({ isSelected = true, uri, token, setSelectedToken, width }: TokenItemProps) => {
  return (
    <Container
      isSelected={isSelected}
      onPress={() => setSelectedToken(token)}
      style={{ width: width }}
    >
      <Coin uri={uri} size="large" />
      <Divider />
      <Symbol>{TokenSymbol[token]}</Symbol>
      <Label>{TokenName[token]}</Label>
    </Container>
  );
};

export default TokenItem;
