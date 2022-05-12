import Palette from '@theme/Palette';
import styled from 'styled-components/native';

export const LayOut = styled.View`
  overflow: hidden;
  flex-direction: row;
  height: 255px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.mainBgColor};
  border: 1px solid ${({ theme }) => theme.borderColor};
`;

export const Index = styled.View`
  padding: 5px 0px;
  align-items: center;
  justify-content: space-around;
  width: 25%;
  background-color: ${Palette.primary};
`;

export const List = styled.View`
  width: 75%;
  padding: 5px 12px;
  align-items: center;
  justify-content: space-around;
`;

export const Column = styled.View`
  display: flex;
  width: 50%;
  flex-direction: row;
`;
