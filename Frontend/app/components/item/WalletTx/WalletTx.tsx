import Avatar from '@components/common/Avatar';
import { WalletTxProps } from '@containers/WalletTxsEmpty/WalletTxsEmpty.props';
import Typography from '@theme/Typography';
import { parseDate } from '@utils/date';
import styled from 'styled-components/native';
import { Balance, Info, LayOut, TxContent } from './WalletTx.styled';

const WalletTx = ({ transaction_memo, createdAt, transaction_value }: WalletTxProps) => {
  const date = new Date(createdAt!);

  return (
    <LayOut>
      <Info>
        <Avatar />
        <TxContent>
          <Typography size="body1" weight="regular">
            {transaction_memo}
          </Typography>
          <VSep />
          <Typography size="caption1" weight="light">
            {parseDate(date)}
          </Typography>
        </TxContent>
      </Info>
      <Balance>
        <Typography size="h2" weight="regular">
          $ {transaction_value}
        </Typography>
      </Balance>
    </LayOut>
  );
};

const VSep = styled.View`
  height: 5;
`;

export default WalletTx;
