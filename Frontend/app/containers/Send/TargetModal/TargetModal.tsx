import Divider from '@components/common/Divider/Divider';
import { useNavigation } from '@react-navigation/native';
import { Phone, QrCode, Textbox, Users, Wallet } from 'phosphor-react-native';
import { useEffect } from 'react';
import { Alert, Modal, TouchableWithoutFeedback } from 'react-native';
import styled, { useTheme } from 'styled-components/native';
import { MethodType } from '../SelectTargetView/SelectTargetView';

import TargetButton from './TargetButton';

const Wrapper = styled.TouchableOpacity`
  flex: 1;
  height: 100%;
  /* justify-content: ; */

  align-items: baseline;

  background-color: rgba(0, 0, 0, 0.3);
`;

const Container = styled.View`
  width: 100%;
  position: absolute;
  bottom: -20px;
  /* margin: 20px; */
  background-color: ${(props) => props.theme.subBgColor};
  border-radius: 20px;
  padding: 10px 25px 70px 25px;

  align-items: center;
`;

const Title = styled.Text`
  width: 100%;
  color: ${({ theme }) => theme.textColor};
  text-align: left;
  font-size: 20px;
  font-weight: 700;
`;

const ButtonGroup = styled.View`
  width: 100%;
  justify-content: center;
  flex-direction: column;
`;

interface TargetModalProps {
  modalVisible: boolean;
  onModalClosed: any;
  selected: MethodType | undefined;
  setSelected: any;
  // data?: FriendType;
  // onRefreshList: any;
}

const TargetModal = ({ modalVisible, onModalClosed, selected, setSelected }: TargetModalProps) => {
  const theme = useTheme();

  useEffect(() => {}, [selected]);

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={onModalClosed}
      >
        <Wrapper onPress={onModalClosed}>
          <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
            <Container>
              <Divider />
              <Title>송금 방식 선택</Title>
              <Divider />
              <ButtonGroup>
                <TargetButton
                  title="지갑주소"
                  // onPress={onModalClosed}
                  icon={<Wallet color={theme.textDisabledColor} />}
                  guide="블록체인 지갑주소를 직접 입력"
                  selected={selected}
                  setSelected={setSelected}
                />
                <TargetButton
                  title="친구"
                  // onPress={onModalClosed}
                  icon={<Users color={theme.textDisabledColor} />}
                  guide="친구 목록에서 선택"
                  selected={selected}
                  setSelected={setSelected}
                />
                <TargetButton
                  title="닉네임"
                  // onPress={onModalClosed}
                  icon={<Textbox color={theme.textDisabledColor} />}
                  guide="슝의 회원이라면?"
                  selected={selected}
                  setSelected={setSelected}
                />
                <TargetButton
                  title="QR코드"
                  // onPress={onModalClosed}
                  icon={<QrCode color={theme.textDisabledColor} />}
                  guide="QR코드로 지갑 주소 인식"
                  selected={selected}
                  setSelected={setSelected}
                />
                <TargetButton
                  title="전화번호"
                  // onPress={onModalClosed}
                  icon={<Phone color={theme.textDisabledColor} />}
                  guide="슝의 회원이라면?"
                  selected={selected}
                  setSelected={setSelected}
                />
              </ButtonGroup>
            </Container>
          </TouchableWithoutFeedback>
        </Wrapper>
      </Modal>
    </>
  );
};

export default TargetModal;
