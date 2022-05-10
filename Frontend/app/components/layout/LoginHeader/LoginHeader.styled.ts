import Typography from '@theme/Typography';
import { getScreenHeight } from '@utils/native';
import styled from 'styled-components/native';

export const LayOut = styled.View`
  margin-bottom: ${getScreenHeight() * 0.01};
`;

export const Slogan = styled.View`
  align-self: center;
  margin-bottom: 5px;
`;
export const SloganMessage = styled(Typography)``;

export const AvatarLayOut = styled.View`
  align-self: center;
  margin-bottom: ${getScreenHeight() * 0.01};
`;

export const Title = styled.View`
  align-self: center;
  margin-bottom: ${getScreenHeight() * 0.02};
`;

export const TitleMessage = styled(Typography)``;
