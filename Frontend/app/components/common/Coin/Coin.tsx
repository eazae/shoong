import styled from 'styled-components/native';

interface CoinProps {
  uri: string;
}

const Coin = ({ uri }: CoinProps) => {
  return (
    <LayOut>
      <Image source={{ uri }} />
    </LayOut>
  );
};

const LayOut = styled.View`
  background-color: ${({ theme }) => theme.mainBgColor};
  border-radius: 15px;
  padding: 3px;
  width: 34px;
  height: 34px;
`;

const Image = styled.Image`
  width: 28px;
  height: 28px;
`;

export default Coin;
