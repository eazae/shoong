import coinImgUri from '@utils/CoinVariations';
import { useState } from 'react';
import { FlatList } from 'react-native';
import TokenItem from './TokenItem';

interface TokenListProp {
  selectedToken: string;
  setSelectedToken: any;
}

const TokenList = ({ selectedToken, setSelectedToken }: TokenListProp) => {
  const [containerWidth, setContainerWidth] = useState(0);

  const margins = 10;
  const numColumns = 2;

  return (
    <FlatList
      data={Object.entries(coinImgUri)}
      columnWrapperStyle={{
        justifyContent: 'space-between',
        marginBottom: 10,
      }}
      onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)}
      renderItem={({ item }) => (
        <TokenItem
          label={item[0]}
          uri={item[1]}
          isSelected={selectedToken === item[0]}
          setSelectedToken={setSelectedToken}
          width={(containerWidth - margins) / numColumns}
        />
      )}
      keyExtractor={(item, index) => item[0]}
      numColumns={numColumns}
    />
  );
};

export default TokenList;
