import { ButtonProps } from 'react-native';
import styled from 'styled-components/native';

const TextButtonContainer = styled.TouchableOpacity`
  padding-left: 5px;
  padding-right: 5px;
`;
const Content = styled.Text`
  color: ${(props) => props.theme.textHighlightColor};
`;
interface TextButtonProps {
  title: string;
  onPress: any;
}

const TextButton = ({ title, onPress }: ButtonProps) => {
  return (
    <TextButtonContainer onPress={onPress}>
      <Content>{title}</Content>
    </TextButtonContainer>
  );
};

export default TextButton;
