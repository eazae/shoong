import { isIos } from '@utils/native';
import styled from 'styled-components/native';

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Verify = styled.View`
  padding-top: ${isIos() ? 0.5 : 4}px;
  width: 30%;
`;

export const Phone = styled.View`
  width: 67%;
`;
