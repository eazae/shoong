import { Dimensions, Platform } from 'react-native';

export const isAndroid = () => Platform.OS === 'android';
export const isIos = () => Platform.OS === 'ios';

export const getScreenHeight = () => {
  const { height: SCREEN_HEIGHT } = Dimensions.get('screen');

  return SCREEN_HEIGHT;
};
