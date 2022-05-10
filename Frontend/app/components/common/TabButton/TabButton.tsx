import { CaretRight } from 'phosphor-react-native';
import styled, { useTheme } from 'styled-components/native';

const TabButtonContainer = styled.TouchableOpacity`
  width: 100%;
  /* height: 60px; */
  padding: 8px 16px;
  /* background-color: rgba(255, 255, 255, 0.1); */
  background-color: ${(props) => props.theme.subBgColor};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TabButtonIcon = styled.View`
  /* align-items: center; */
  /* margin-right: 8px; */
`;

const TabButtonContent = styled.View`
  width: 75%;
  padding: 8px;
`;

const TabButtonTitle = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.textColor};
  line-height: 30px;
`;

const TabIcon = styled.View`
  margin-left: 8px;
`;

interface TabButtonProps {
  onPress: any;
  icon?: object;
  title: string;
}

const TabButton: React.FC<TabButtonProps> = ({ onPress, icon, title, children }) => (
  <TabButtonContainer onPress={onPress}>
    {/* {icon ? <TabButtonIcon>{icon}</TabButtonIcon> : null} */}
    <TabButtonContent>
      <TabButtonTitle>{title}</TabButtonTitle>
      {children}
    </TabButtonContent>
    <TabIcon>
      {icon ? (
        <TabButtonIcon>{icon}</TabButtonIcon>
      ) : (
        <CaretRight
          size={16}
          style={{ alignItems: 'flex-end' }}
          weight="bold"
          color={useTheme().textColor}
        />
      )}
    </TabIcon>
  </TabButtonContainer>
);
export default TabButton;
