import styled from 'styled-components/native';

const TabButtonContainer = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  padding: 0px 16px;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const TabIcon = styled.View`
  align-items: center;
  margin-right: 8px;
`;

const TabButtonText = styled.Text`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.textColor};
`;

interface TabButtonProps {
  onPress: any;
  icon?: object;
  title: string;
}

const TabButton: React.FC<TabButtonProps> = ({ onPress, icon, title }) => (
  <TabButtonContainer onPress={onPress}>
    <TabIcon>{icon}</TabIcon>
    <TabButtonText>이동하기:{title}</TabButtonText>
  </TabButtonContainer>
);
export default TabButton;
