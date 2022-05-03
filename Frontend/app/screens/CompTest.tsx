import Button from '@components/common/Button/Button';
import Modal from '@components/common/Modal/Modal';
import { Switch } from '@components/common/Switch/Switch';
import { useState } from 'react';
import { Alert, Dimensions, Pressable, Text } from 'react-native';
import styled from 'styled-components/native';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const CompTest: React.FC<any> = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const onModalClosed = () => {
    console.log('닫힘');
    Alert.alert('Modal has been closed.');
    setModalVisible(!modalVisible);
  };
  return (
    <>
      {/* Button */}
      <Button onPress={() => console.log('PRESSED')} title={'버튼'} />
      {/* Switch */}
      <Switch />
      {/* Modal */}
      <Modal modalVisible={modalVisible} onModalClosed={onModalClosed} />
      <Pressable onPress={() => setModalVisible(true)}>
        <Text>Show Modal</Text>
      </Pressable>
    </>
  );
};

export default CompTest;
