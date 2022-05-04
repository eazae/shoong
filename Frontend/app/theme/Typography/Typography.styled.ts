import Color from '@theme/Color';
import styled from 'styled-components/native';
import fontSize from './Size';
import { ITypography } from './Typography.props';
import fontWeight from './Weight/Weight';

export const Text = styled.Text<ITypography>`
  font-size: ${({ size }) => fontSize[size!]};
  font-weight: ${({ weight }) => fontWeight[weight!]};
  color: ${({ color, theme }) => (color ? Color.textColor[color] : theme.textColor)};
  opacity: ${({ variant }) => (variant === 'normal' ? 0.7 : 1)};
`;
