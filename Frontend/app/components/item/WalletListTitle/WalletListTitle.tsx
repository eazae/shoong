import Typography from '@theme/Typography';
import styled from 'styled-components/native';

interface WalletListTitleProps {
  title: string;
}

const WalletListTitle = ({ title }: WalletListTitleProps) => {
  return (
    <LayOut>
      <Typography size="h2" weight="bold">
        {title}
      </Typography>
    </LayOut>
  );
};

const LayOut = styled.View`
  margin: 10px 0px;
`;

export default WalletListTitle;
