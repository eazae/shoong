import styled from 'styled-components/native';
import { css } from 'styled-components';
import { AvatarSize, IAvatarImage } from './Avatar.props';
import Palette from '@theme/Palette';

export const LayOut = styled.View`
  position: relative;
  padding: 5px;
`;

export const AvatarStyle = css<IAvatarImage>`
  border-radius: ${({ size }) => (AvatarSize[size!] / 8) * 3}px;
  width: ${({ size }) => AvatarSize[size!]}px;
  height: ${({ size }) => AvatarSize[size!]}px;
`;

export const Loader = styled.View`
  ${AvatarStyle}
  background-color: ${({ theme }) => theme.cardColor};
`;

export const ImageArea = styled.Image`
  ${AvatarStyle}
`;

export const Noti = styled.View`
  border-radius: 10px;
  width: 20px;
  height: 20px;
  position: absolute;
  border: 2.5px solid ${({ theme }) => theme.mainBgColor};
  top: 0px;
  left: 30px;
  background-color: ${Palette.danger};
`;
