import Coin from '@components/common/Coin';
import Divider from '@components/common/Divider/Divider';
import coinImgUri from '@utils/CoinVariations';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity<{ isSelected: boolean }>`
  background-color: ${(props) =>
    props.isSelected ? props.theme.disabledColor : props.theme.subBgColor};
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  border-color: ${(props) => props.theme.enabledColor};
  border-width: ${(props) => (props.isSelected ? '2px' : '0px')};
`;

const TokenImage = styled.Image`
  width: 100%;
  align-items: center;
`;

const Label = styled.Text`
  color: ${({ theme }) => theme.textColor};
`;

interface TokenItemProps {
  isSelected: boolean;
  uri: string;
  label: string;
  setSelectedToken: any;
  width: number;
}

const TokenItem = ({ isSelected = true, uri, label, setSelectedToken, width }: TokenItemProps) => {
  return (
    <Container
      isSelected={isSelected}
      onPress={() => setSelectedToken(label)}
      style={{ width: width }}
    >
      {/* <TokenImage source={{ uri: coinImgUri.ether }} /> */}
      <Coin uri={uri} size="large" />
      <Divider />
      <Label>{label}</Label>
    </Container>
  );
};

export default TokenItem;
