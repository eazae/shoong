import Color from '@theme/Color';
import Shadows from '@theme/Shadows';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { ButtonProps } from './Button.props';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export const ButtonContainer = styled.TouchableOpacity<ButtonProps>`
  /* width: 100%; */
  /* width: ${SCREEN_WIDTH}; */
  padding: 15px;
  margin: 6px 16px;
  border-radius: 8px;
  /* background-color: ${(props) =>
    props.disabled ? props.theme.disabledColor : props.theme.enabledColor}; */
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
