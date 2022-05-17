import Typography from '@theme/Typography';
import { getScreenHeight } from '@utils/native';
import styled from 'styled-components/native';

const TX_EMPTY_MSG = '아직 송금 내역이 없어요';

const WalletTxsEmpty = () => {
  return (
    <Container>
      <Typography size="h1">😭</Typography>
      <Message>
        <Typography size="body3">{TX_EMPTY_MSG}</Typography>
      </Message>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: ${getScreenHeight() * 0.1}px;
`;

const Message = styled.View`
  margin: 5px;
  opacity: 0.7;
`;

export default WalletTxsEmpty;
