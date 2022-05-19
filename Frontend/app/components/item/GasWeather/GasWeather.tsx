import Coin from '@components/common/Coin';
import { carPOSTapi } from '@containers/SecurityCard/SecurityCardHooks';
import Typography from '@theme/Typography';
import { coinImgUri } from '@utils/CoinVariations';
import { CurrencyKrw } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components';
import styled from 'styled-components/native';
import { CoinPriceType, CoinPriceTypeVariations } from 'types/apiTypes';

export interface GasWeatherProps {
  coinName: CoinPriceTypeVariations;
  coinPrice?: CoinPriceType;
}

const GasWeather = ({ coinPrice, coinName }: GasWeatherProps) => {
  const theme = useTheme();
  const data = {
    card_address: 'string',
    card_name: 'string',
    card_profile_image: 'string',
  };
  return (
    <TouchableOpacity
      onPress={() =>
        carPOSTapi(data)
          .then((res) => console.log(res))
          .catch((err) => console.log(err))
      }
    >
      <LayOut>
        <Coin size="large" uri={coinImgUri[coinName]} />
        <Price>
          <Typography size="body3" weight="regular">
            {coinPrice ? coinPrice.toLocaleString() : '불러오는 중'}
          </Typography>
          {
            // @ts-ignore
            <CurrencyKrw color={theme.textColor} />
          }
        </Price>

        {/* {isGasFeeHigh ? (
          <CloudRain color={theme.textColor} size={Size.h1} />
        ) : (
          <Sun size={Size.h1} color={theme.textColor} />
        )} */}
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
  width: 165px;
  height: 75px;
  padding: 10px;
`;

const Price = styled.View`
  justify-content: center;
  align-items: center;
`;

export default GasWeather;
