import styled from 'styled-components/native';

interface CoinProps {
  size: 'large' | 'default';
  uri: string;
}

const Coin = ({ size = 'default', uri }: CoinProps) => {
  return (
    <LayOut size={size === 'large' ? 50 : 34}>
      <Image source={{ uri }} size={size === 'large' ? 50 : 34} />
    </LayOut>
  );
};

const LayOut = styled.View<{ size: number }>`
  background-color: ${({ theme }) => theme.mainBgColor};
  border-radius: ${({ size }) => size / 2}px;
  padding: 3px;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

const Image = styled.Image<{ size: number }>`
  width: ${({ size }) => size - 6}px;
  height: ${({ size }) => size - 6}px;
`;

export default Coin;
