import { FlatList, ListRenderItem } from 'react-native';
import styled from 'styled-components/native';

interface SepProps {
  margin?: number;
}

interface HFlatListProps extends SepProps {
  data: readonly any[];
  renderItem: ListRenderItem<any>;
}

const HFlatList = ({ margin, data, renderItem }: HFlatListProps) => {
  return (
    <FlatList
      horizontal
      data={data}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <Sep margin={margin} />}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const Sep = styled.View<SepProps>`
  width: ${({ margin }) => `${margin}px`};
`;

export default HFlatList;
