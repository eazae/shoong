import Color from '@theme/Color';
import styled from 'styled-components/native';
import { IMnemonicBadge } from './MnemonicBadge.props';

export const LayOut = styled.View<IMnemonicBadge>`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  border-radius: 12px;
  padding: 7px 5px;
  margin: 0px 5px;
  border: 1.5px ${({ variant }) => variant} ${Color.borderColor.primary};
`;
