import Palette from '@theme/Palette';
import Shadows from '@theme/Shadows';
import styled from 'styled-components/native';

export const LayOut = styled.View`
  padding: 20px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.cardColor};
  border: 1px solid ${({ theme }) => theme.borderColor};
  box-shadow: ${Shadows.common};
  height: 450px;
  justify-content: space-between;
`;

export const Title = styled.View`
  margin: 5px 0px;
  align-self: flex-end;
`;
