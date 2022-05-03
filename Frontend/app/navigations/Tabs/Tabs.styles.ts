import { isAndroid } from '@utils/native';
import { useTheme } from 'styled-components';

export const tabBarStyle = {
  backgroundColor: isAndroid() ? useTheme().cardColor : 'transparent',
  borderRadius: 40,
  padding: 10,
  height: 90,
  position: 'absolute',
  overflow: 'hidden',
};
