import styled from 'styled-components/native';

const Container = styled.TouchableOpacity<{ isFocus: boolean }>`
  background-color: ${({ isFocus, theme }) =>
    isFocus ? theme.enabledColor : theme.textDisabledColor};
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

const Title = styled.Text<{ isFocus: boolean }>`
  color: white;
  margin-left: 10px;
  font-weight: 500;
  font-size: ${(props) => (props.isFocus ? '18px' : '16px')};
`;

interface ProgressTabProps {
  index: number;
  title: string;
  onPress: any;
  isFocus: boolean;
}

const ProgressTab = ({ index, title, onPress, isFocus = false }: ProgressTabProps) => {
  return (
    <Container onPress={onPress} isFocus={isFocus}>
      <NumberWrapper>
        <Number>{index}</Number>
      </NumberWrapper>
      <Title isFocus={isFocus}>{title}</Title>
    </Container>
  );
};

export default ProgressTab;
