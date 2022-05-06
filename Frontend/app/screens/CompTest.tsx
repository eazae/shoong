import Button from '@components/common/Button/Button';
import Input from '@components/common/Input/Input';
import Modal from '@components/common/Modal/Modal';
import { Switch } from '@components/common/Switch/Switch';
import TabButton from '@components/common/TabButton/TabButton';
import { getSolanaBalance } from '@services/web3/solana';
import { getSecureStoreValue, setSecureStoreValue } from '@utils/secureStore';
import { Alien, UserCircleGear } from 'phosphor-react-native';
import { useEffect, useState } from 'react';
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

  // JWT 저장 테스트
  async function test() {
    // getSecureStoreValue('jwt');
    // setSecureStoreValue('jwt', '테스트JWT값');
    getSolanaBalance('CqKfJPQFRn6sSN2zWbKUckR68XPFYSDY42D2grecCwr1');
  }
  useEffect(() => {
    test();
  }, []);

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
      {/* Text Input */}
      <Input keyboardType="numeric" placeholder="입력하시오" />
      {/* Tab Button */}
      <TabButton
        onPress={() => console.log('PRESSED')}
        icon={<Alien weight="fill" />}
        title={'스크린 링크'}
      />
    </>
  );
};

export default CompTest;
