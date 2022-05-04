import React, { useState } from 'react';
import { Alert, Modal as RNModal, StyleSheet, Text, Pressable, View } from 'react-native';

interface ModalProps {
  modalVisible: boolean;
  onModalClosed: Function;
}

const Modal: React.FC<ModalProps> = ({ modalVisible, onModalClosed }) => {
  // const [modalVisible, setModalVisible] = useState(false);
  return (
    // <View style={styles.centeredView}>
    <RNModal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => onModalClosed()}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Hello World!</Text>
          <Pressable style={[styles.button, styles.buttonClose]} onPress={() => onModalClosed()}>
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
        </View>
      </View>
    </RNModal>
    // <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
    //   <Text style={styles.textStyle}>Show Modal</Text>
    // </Pressable>
    // </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Modal;
