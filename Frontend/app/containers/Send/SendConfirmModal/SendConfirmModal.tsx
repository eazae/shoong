import Avatar from '@components/common/Avatar';
import Button from '@components/common/Button';
import Divider from '@components/common/Divider/Divider';
import { useNavigation } from '@react-navigation/native';
import { requestAddFriend, requestDeleteFriend } from '@services/api/friends/friendsAPI';
import { TokenSymbol } from '@services/api/token/tokenTypes';
import { ethereumTransfer, ethereumTokenTransfer } from '@services/web3/transfer';
import Typography from '@theme/Typography';
import { getSecureStoreValue } from '@utils/secureStore';
import { getCardPrivateKeyValue } from '@utils/secureStore';
import { UserCircle } from 'phosphor-react-native';
import { useEffect, useState } from 'react';
import { Alert, Modal, TouchableWithoutFeedback } from 'react-native';
import styled, { useTheme } from 'styled-components/native';
import { FriendType, TransactionType, UserInfoType } from 'types/apiTypes';
import { setGas } from '@services/web3/setGas';
const Wrapper = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Container = styled.View`
  width: 90%;
  margin: 10px;
  background-color: ${(props) => props.theme.subBgColor};
  border-radius: 10;
  padding: 35px;
  align-items: center;
`;

const Title = styled.Text`
  width: 100%;
  color: ${({ theme }) => theme.textColor};
  text-align: left;
  font-size: 20px;
  font-weight: 700;
`;

const Content = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  padding: 5px 0px;
  /* text-overflow: clip; */
`;

const Label = styled.Text`
  width: 25%;
  color: ${({ theme }) => theme.textLinkColor};
  text-align: left;
  font-size: 14px;
  font-weight: 700;
  margin-right: 10px;
`;

const Info = styled.Text`
  width: 75%;
  color: ${({ theme }) => theme.textSubColor};
  text-align: left;
  font-size: 14px;
`;

const ButtonGroup = styled.View`
  justify-content: center;
  flex-direction: row;
`;

interface SendConfirmModalProps {
  modalVisible: boolean;
  onModalClosed: any;
  data: TransactionType;
  // state: 'pending' | 'success' | 'fail';
  isProceeded: boolean;
  setIsProceeded: any;
}

const SendConfirmModal = ({
  modalVisible,
  onModalClosed,
  data,
  isProceeded,
  setIsProceeded,
}: SendConfirmModalProps) => {
  const [gasFee, setGasFee] = useState(0);
  const [transactionHash, setTransactionHash] = useState('');
  const [state, setState] = useState('confirm');
  // Alert.alert(JSON.stringify(data));

  const setAutoGasFee = async () => {
    const gas = await setGas();
    setGasFee(gas[2]);
  };

  const handleTransaction = async () => {
    setState('pending');
    /* 출금 주소의 개인키 가져오기  */
    const privateKey = await getCardPrivateKeyValue(data.sendAddress);

    let result;
    if (data.token === 'ethereum') {
      result = await ethereumTransfer(
        data.sendAddress,
        privateKey,
        data.targetAddress,
        data.amount,
        gasFee
      );
    } else if (data.token === 'solana') {
    } else {
      result = await ethereumTokenTransfer(
        data.sendAddress,
        privateKey,
        data.targetAddress,
        data.token,
        data.amount,
        gasFee
      );
    }
    if (result) {
      setIsProceeded(true);
      setTransactionHash(result);
    }
    // onModalClosed();
  };

  useEffect(() => {
    if (modalVisible) setState('confirm');
  }, [modalVisible]);

  useEffect(() => {
    setAutoGasFee();
  }, []);

  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={onModalClosed}
      >
        <Wrapper onPress={onModalClosed}>
          <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
            {!isProceeded ? (
              <Container>
                <Title>송금 내용을 확인할게요</Title>
                <Divider />
                <Content>
                  <Label>출금 주소</Label>
                  <Info>{data.sendAddress}</Info>
                </Content>
                <Content>
                  <Label>송금 주소</Label>
                  <Info>{data.targetAddress}</Info>
                </Content>
                <Content>
                  <Label>토큰</Label>
                  <Info>{`${TokenSymbol[data.token]} (${data.token})`}</Info>
                </Content>
                <Content>
                  <Label>송금 수량</Label>
                  <Info>{data.amount}</Info>
                </Content>
                <Content>
                  <Label>송금 수수료</Label>
                  <Info>{`${gasFee} GWEI`}</Info>
                </Content>
                <Divider />

                <ButtonGroup>
                  <Button
                    title={state === 'confirm' ? '네, 확인했어요' : '송금 중입니다'}
                    onPress={handleTransaction}
                    variant={state === 'confirm' ? 'primary' : 'disabled'}
                    disabled={state === 'pending'}
                  // disabled={data.cards.length < 1}
                  />
                  <Divider orientation="horizontal" size="small" />
                </ButtonGroup>
              </Container>
            ) : (
              <Container>
                <Title>송금이 완료됐어요!</Title>
                <Divider />
                <Content>
                  <Label>출금 주소</Label>
                  <Info>{data.sendAddress}</Info>
                </Content>
                <Content>
                  <Label>{`트랜잭션${'\n'}해시`}</Label>
                  <Info>{transactionHash}</Info>
                </Content>

                <Divider />

                <ButtonGroup>
                  <Button
                    title="홈으로 가기"
                    onPress={onModalClosed}
                    variant="primary"
                  // disabled={data.cards.length < 1}
                  />
                  <Divider orientation="horizontal" size="small" />
                </ButtonGroup>
              </Container>
            )}
          </TouchableWithoutFeedback>
        </Wrapper>
      </Modal>
    </>
  );
};

export default SendConfirmModal;
