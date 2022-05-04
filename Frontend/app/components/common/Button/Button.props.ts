import { buttonColorNames } from '@theme/Color/Color.props';
import { IconProps } from 'phosphor-react-native';

export interface ButtonProps {
  icon?: JSX.Element;
  onPress?: any;
  title?: string;
  variant?: buttonColorNames;
}
