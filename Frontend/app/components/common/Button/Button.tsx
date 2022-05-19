import Typography from '@theme/Typography';
import { ButtonProps } from './Button.props';
import { ButtonContainer, IconLayOut } from './Button.styled';

const Button: React.FC<ButtonProps> = ({ disabled, icon, onPress, title, variant = 'primary' }) => (
  <ButtonContainer disabled={disabled} onPress={onPress} variant={variant}>
    {icon ? <IconLayOut>{icon}</IconLayOut> : null}
    <Typography weight="regular" color={variant === 'transparent' ? 'primary' : 'white'}>
      {title}
    </Typography>
  </ButtonContainer>
);

export default Button;
