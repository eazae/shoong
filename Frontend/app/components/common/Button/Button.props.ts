import { buttonColorNames } from '@theme/Color/Color.props';

export interface ButtonProps {
  icon?: JSX.Element;
  onPress?: any;
  title?: string;
  disabled?: boolean;
  variant?: buttonColorNames;
}
