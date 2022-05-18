import WalletListTitle from '@components/item/WalletListTitle';
import WalletTx from '@components/item/WalletTx';
import CardLarge from '@containers/CardLarge';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { getScreenHeight } from '@utils/native';
import { useEffect } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

type CardDetailParamList = {
  CardDetail: {
    card_address: string;
    title: string;
    card_profile_image: string;
    createdAt: number[];
  };
};

const CardDetail: React.FC<NativeStackScreenProps<CardDetailParamList, 'CardDetail'>> = ({
  navigation: { setOptions },
  route: {
    params: { title, card_address, card_profile_image, createdAt },
  },
}) => {
  useEffect(() => {
    setOptions({ title: title });
  });
  return (
    <LayOut>
      <FlatList
        ListHeaderComponent={
          <>
            <CardLarge
              card_address={card_address}
              card_profile_image={card_profile_image}
              createdAt={createdAt}
            />
            <WalletListTitle title="지난 송금 내역" />
          </>
        }
        renderItem={({ item }) => <WalletTx {...item} />}
      />
    </LayOut>
  );
};

export default CardDetail;

const LayOut = styled.View`
  padding: 0px 20px;
  height: ${getScreenHeight()};
`;
