import Button from '@components/common/Button/Button';
import { Switch } from '@components/common/Switch/Switch';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const ComingSoonTitle = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 600;
  margin-left: 30px;
  margin-bottom: 20px;
`;

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const CompTest: React.FC<any> = () => {
  return (
    <>
      <Button onPress={() => console.log('PRESSED')} title={'버튼'} />
      <Switch />
    </>
  );
};

export default CompTest;
