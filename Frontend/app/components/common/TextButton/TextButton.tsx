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
}

const TextButton = ({ title }: TextButtonProps) => {
  return (
    <TextButtonContainer>
      <Content>{title}</Content>
    </TextButtonContainer>
  );
};

export default TextButton;
