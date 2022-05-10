import { getScreenHeight } from '@utils/native';
import styled from 'styled-components/native';

const SCREEN_HEIGHT = getScreenHeight();

export const ScreenLayOut = styled.View`
  height: 100%;
  justify-content: center;
`;

export const LayOut = styled.KeyboardAvoidingView`
  height: ${SCREEN_HEIGHT * 0.7};
  padding: 0px 20px;
  justify-content: center;
`;
