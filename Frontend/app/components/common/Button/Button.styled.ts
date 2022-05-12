import Color from '@theme/Color';
import Shadows from '@theme/Shadows';
import styled from 'styled-components/native';
import { ButtonProps } from './Button.props';

export const ButtonContainer = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  padding: 15px;
  margin-bottom: 6px;
  border-radius: 8px;
  background-color: ${({ variant }) => Color.buttonColor[variant!]};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: ${Shadows.button};
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
`;

export const IconLayOut = styled.View`
  margin-right: 8px;
`;
