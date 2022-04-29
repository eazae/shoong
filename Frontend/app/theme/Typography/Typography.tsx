import { ITypography } from './Typography.props';
import { Text } from './Typography.styled';

const Typography = ({
  children,
  size = 'body2',
  weight = 'light',
  variant = 'strong',
  color,
}: ITypography) => {
  return (
    <Text size={size} weight={weight} variant={variant} color={color}>
      {children}
    </Text>
  );
};

export default Typography;
