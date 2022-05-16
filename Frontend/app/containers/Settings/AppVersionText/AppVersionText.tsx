import { version } from '../../../../package.json';
// import { version } from 'package.json';
import styled from 'styled-components/native';

const Text = styled.Text`
  padding: 20px 16px;
  font-size: 12px;
  color: ${(props) => props.theme.textColor};
`;
const AppVersionText = () => {
  return <Text>앱 버전 {version}</Text>;
};

export default AppVersionText;
