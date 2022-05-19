import Coin from '@components/common/Coin';
import Size from '@theme/Typography/Size';
import { coinImgUri, CoinVariation } from '@utils/CoinVariations';
import { CloudRain, Sun } from 'phosphor-react-native';
import { Touchable, TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components';
import styled from 'styled-components/native';
import { setGas } from './GasWeather.hook';

interface GasWeatherProps {
  coinName: CoinVariation;
  isGasFeeHigh: boolean;
}

const GasWeather = ({ coinName, isGasFeeHigh }: GasWeatherProps) => {
  const theme = useTheme();
  return (
    <TouchableOpacity onPress={() => setGas()}>
      <LayOut>
        <Coin size="large" uri={coinImgUri[coinName]} />
        {isGasFeeHigh ? (
          <CloudRain color={theme.textColor} size={Size.h1} />
        ) : (
          <Sun size={Size.h1} color={theme.textColor} />
        )}
      </LayOut>
    </TouchableOpacity>
  );
};

const LayOut = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.cardColor};
  width: 150px;
  height: 75px;
  padding: 10px;
`;

export default GasWeather;
