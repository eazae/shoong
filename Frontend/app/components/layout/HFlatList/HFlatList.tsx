import { FlatList, ListRenderItem } from 'react-native';
import styled from 'styled-components/native';

interface SepProps {
  margin?: number;
}

interface HFlatListProps extends SepProps {
  data: readonly any[];
  renderItem: ListRenderItem<any>;
  ListFooterComponent?: React.ComponentType<any>;
}

const HFlatList = ({ ListFooterComponent, margin, data, renderItem }: HFlatListProps) => {
  return (
    <LayOut>
      <FlatList
        ListFooterComponent={ListFooterComponent}
        horizontal
        data={data}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <Sep margin={margin} />}
        showsHorizontalScrollIndicator={false}
      />
    </LayOut>
  );
};

const Sep = styled.View<SepProps>`
  width: ${({ margin }) => `${margin}px`};
`;

const LayOut = styled.View`
  margin-right: -20px;
`;

export default HFlatList;
