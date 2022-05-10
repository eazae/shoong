import { isAndroid } from '@utils/native';
import { useTheme } from 'styled-components';

export const TABBAR_HEIGHT = 90;

export const tabBarStyle = {
  backgroundColor: isAndroid() ? useTheme().cardColor : 'transparent',
  borderRadius: 40,
  padding: 10,
  height: TABBAR_HEIGHT,
  position: 'absolute',
  overflow: 'hidden',
};
