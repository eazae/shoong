import coinImgUri from '@utils/CoinVariations';
import { getScreenWidth } from '@utils/native';
import { useState } from 'react';
import { Dimensions, FlatList } from 'react-native';
import styled from 'styled-components/native';
import TokenItem from './TokenItem';

const Container = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

interface TokenListProp {
  selectedToken: string;
  setSelectedToken: any;
}

const TokenList = ({ selectedToken, setSelectedToken }: TokenListProp) => {
  const [containerWidth, setContainerWidth] = useState(0);
  // const screenWidth = getScreenWidth();

  const margins = 20;
  const numColumns = 2;

  return (
    <Container onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)}>
      {Object.entries(coinImgUri).map((item) => (
        <TokenItem
          label={item[0]}
          uri={item[1]}
          isSelected={selectedToken === item[0]}
          setSelectedToken={setSelectedToken}
          width={(containerWidth - margins) / numColumns}
        />
      ))}
      {/* <FlatList
        data={Object.entries(coinImgUri)}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginBottom: 10,
        }}
        // onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)}
        renderItem={({ item }) => (
          <TokenItem
            label={item[0]}
            uri={item[1]}
            isSelected={selectedToken === item[0]}
            setSelectedToken={setSelectedToken}
            // width={(containerWidth - margins) / numColumns}
          />
        )}
        keyExtractor={(item) => item[0]}
        numColumns={numColumns}
        disableVirtualization={true}
      /> */}
    </Container>
  );
};

export default TokenList;
