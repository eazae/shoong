import Shadows from '@theme/Shadows';
import styled from 'styled-components/native';

export const LayOut = styled.View`
  /* width: 100%; */
  flex-direction: row;
  height: 70px;
  border-radius: 8px;
  padding: 5px 15px;
  background-color: ${({ theme }) => theme.cardColor};
  box-shadow: ${Shadows.button};
  align-items: center;
  justify-content: space-between;
`;

export const Info = styled.View`
  flex-direction: row;
`;

export const TxContent = styled.View`
  margin-left: 15px;
  justify-content: space-around;
`;

export const Balance = styled.View`
  justify-content: center;
`;
