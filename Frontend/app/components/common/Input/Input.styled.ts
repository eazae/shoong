import Color from '@theme/Color';
import Typography from '@theme/Typography';
import styled from 'styled-components/native';

export const KeyboardArea = styled.TouchableWithoutFeedback``;

export const LayOut = styled.View`
  margin-bottom: 6px;
`;

export const TextInput = styled.TextInput<{ error: string; isFocused: boolean }>`
  color: ${({ theme }) => theme.textColor};
  padding: 15px 12px;
  border-radius: 6px;
  border: 1px solid
    ${({ theme, error, isFocused }) => {
      if (error) {
        return Color.borderColor.error;
      } else if (isFocused) {
        return Color.borderColor.primary;
      } else {
        return theme.borderColor;
      }
    }};
  background-color: ${({ theme }) => theme.cardColor};
`;

export const ErrorMessage = styled.View`
  margin: 3px 3px;
`;
export const Error = styled(Typography)``;

export const LabelMessage = styled.View`
  margin-bottom: 6px;
`;

export const Label = styled(Typography)``;
