import Typography from '@theme/Typography';
import { IMnemonicBadge } from './MnemonicBadge.props';
import { LayOut } from './MnemonicBadge.styled';

const MnemonicBadge: React.FC<IMnemonicBadge> = ({ variant = 'solid', children }) => {
  return (
    <LayOut variant={variant}>
      <Typography size="body3">{children}</Typography>
    </LayOut>
  );
};

export default MnemonicBadge;
