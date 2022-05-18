import Shadows from '@theme/Shadows';
import Typography from '@theme/Typography';
import React from 'react';
import { Modal as RNModal, useColorScheme } from 'react-native';
import styled from 'styled-components/native';
import Button from '../Button';
import { ButtonProps } from '../Button/Button.props';

interface ModalProps {
  modalTitle?: string;
  content?: string;
  buttonTitle?: string;
  modalVisible: boolean;
  onModalClosed: Function;
  buttonIcon: ButtonProps['icon'];
}

const Modal: React.FC<ModalProps> = ({
  modalTitle,
  content,
  buttonIcon,
  buttonTitle,
  modalVisible,
  onModalClosed,
}) => {
  // const [modalVisible, setModalVisible] = useState(false);
  const isDark = useColorScheme() === 'dark';
  return (
    // <View style={styles.centeredView}>
    <RNModal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => onModalClosed()}
    >
      <LayOut>
        <Container isDark={isDark}>
          <Title>
            <Typography weight="bold" size="body1">
              {modalTitle}
            </Typography>
          </Title>
          <Content>
            <Typography size="body3">{content}</Typography>
          </Content>
          <Button icon={buttonIcon} title={buttonTitle} onPress={() => onModalClosed()} />
        </Container>
      </LayOut>
    </RNModal>
    // <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
    //   <Text style={styles.textStyle}>Show Modal</Text>
    // </Pressable>
    // </View>
  );
};
const LayOut = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 22;
  background-color: 'rgba(0,0,0,0.35)';
`;

const Container = styled.View<{ isDark: boolean }>`
  /* border: 1px solid ${({ theme }) => theme.borderColor}; */
  border-radius: 10px;
  padding: 15px 18px;
  width: 240px;
  background-color: ${({ isDark }) => (isDark ? 'rgba(0,0,0,0.9)' : 'rgba(255,255,255,0.9)')};
  box-shadow: ${Shadows.common};
  align-items: center;
`;

const Title = styled.View`
  margin-bottom: 15px;
  align-items: center;
`;

const Content = styled.View`
  margin-bottom: 15px;
  text-align: center;
`;

export default Modal;
