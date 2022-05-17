import GasWeather from '@components/item/GasWeather';
import HFlatList from '@components/layout/HFlatList';
import { CoinVariation } from '@utils/CoinVariations';

interface GasWeatherProps {
  coinName: CoinVariation;
}

const gasWeathers: GasWeatherProps[] = [
  { coinName: 'ether' },
  { coinName: 'tether' },
  { coinName: 'mana' },
  { coinName: 'solana' },
];

const GasWeathers = () => {
  return (
    <HFlatList
      data={gasWeathers}
      renderItem={({ item }) => <GasWeather coinName={item.coinName} />}
      margin={5}
    />
  );
};

export default GasWeathers;
