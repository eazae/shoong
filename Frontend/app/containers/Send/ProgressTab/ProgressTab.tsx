import { Check } from 'phosphor-react-native';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity<{ state: StateType }>`
  background-color: ${({ state, theme }) =>
    state === 'focus'
      ? theme.enabledColor
      : state === 'selected'
      ? theme.enabledColor
      : theme.greyBgColor};
  display: flex;
  flex-direction: row;
  padding: 10px;
  border-radius: 100;
  /* margin: 0px 10px; */
  align-items: center;
`;

const NumberWrapper = styled.View`
  width: 40px;
  height: 40px;
  background-color: white;
  padding: 10px;
  border-radius: 200;
  align-items: center;
  justify-content: center;
`;

const Number = styled.Text`
  color: black;
  /* padding: 10px; */
  border-radius: 100;
  font-weight: 600;
  font-size: 16px;
`;

const Title = styled.Text<{ state: StateType }>`
  color: white;
  margin-left: 10px;
  font-weight: 500;
  font-size: ${(props) => (props.state === 'focus' ? '18px' : '16px')};
`;

type StateType = 'empty' | 'focus' | 'selected';

interface ProgressTabProps {
  index: number;
  title: string;
  onPress: any;
  // isFocus: boolean;
  state: StateType;
}

const ProgressTab = ({ index, title, onPress, state = 'empty' }: ProgressTabProps) => {
  return (
    <Container onPress={onPress} state={state}>
      <NumberWrapper>
        {state === 'selected' ? <Check weight="bold" /> : <Number>{index}</Number>}
      </NumberWrapper>
      <Title state={state}>{title}</Title>
    </Container>
  );
};

export default ProgressTab;
