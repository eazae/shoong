import GasWeather from '@components/item/GasWeather';
import { GasWeatherProps } from '@components/item/GasWeather/GasWeather';
import HFlatList from '@components/layout/HFlatList';
import { CoinPricesType } from 'types/apiTypes';

const GasWeathers = ({ decentraland, ethereum, tether, solana }: CoinPricesType) => {
  const gasWeathers: GasWeatherProps[] = [
    { coinName: 'ethereum', coinPrice: ethereum },
    { coinName: 'tether', coinPrice: tether },
    { coinName: 'decentraland', coinPrice: decentraland },
    { coinName: 'solana', coinPrice: solana },
  ];
  return (
    <HFlatList data={gasWeathers} renderItem={({ item }) => <GasWeather {...item} />} margin={5} />
  );
};

export default GasWeathers;
