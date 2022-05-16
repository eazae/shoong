import Shadows from '@theme/Shadows';
import styled from 'styled-components/native';

export const LayOut = styled.View`
  padding: 20px 15px 9px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.cardColor};
  border: 1px solid ${({ theme }) => theme.borderColor};
  box-shadow: ${Shadows.common};
  /* height: 420px; */
  justify-content: space-between;
`;

export const Title = styled.View`
  margin: 5px 0px;
  align-self: flex-end;
`;

export const Privacy = styled.View`
  justify-content: center;
  align-items: center;
  padding: 25px;
  overflow: hidden;
  height: 255px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.mainBgColor};
  border: 1px solid ${({ theme }) => theme.borderColor};
`;

export const PrivacySep = styled.View`
  height: 10px;
`;
