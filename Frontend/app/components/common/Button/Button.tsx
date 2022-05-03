import styled from 'styled-components/native';

const ButtonContainer = styled.TouchableOpacity`
  width: 120px;
  height: 40px;
  padding: 12px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.mainBgColor};
`;

const ButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
`;

interface ButtonProps {
  onPress: any;
  title: string;
}

const Button: React.FC<ButtonProps> = ({ onPress, title }) => (
  <ButtonContainer onPress={onPress}>
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
);
export default Button;
