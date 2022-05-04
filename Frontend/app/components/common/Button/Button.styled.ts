import Color from '@theme/Color';
import Shadows from '@theme/Shadows';
import styled from 'styled-components/native';
import { ButtonProps } from './Button.props';

export const ButtonContainer = styled.TouchableOpacity<ButtonProps>`
  /* width: 120px; */
  height: 45px;
  padding: 12px;
  border-radius: 10px;
  background-color: ${({ variant }) => Color.buttonColor[variant!]};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: ${Shadows.button};
`;

export const IconLayOut = styled.View`
  margin-right: 8px;
`;
