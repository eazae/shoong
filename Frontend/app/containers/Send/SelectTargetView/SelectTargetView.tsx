import { theme } from '@storybook/react-native/dist/preview/components/Shared/theme';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';
import TargetModal from '../TargetModal/TargetModal';

const Container = styled.View`
  display: flex;
  margin-top: 10px;
`;

const SelectMethodButton = styled.Text`
  font-weight: 600;
  padding-left: 10px;
  color: ${({ theme }) => theme.textSubColor};
`;

export type MethodType = '지갑주소' | '친구' | '닉네임' | 'QR코드' | '전화번호';

const SelectTargetView = () => {
  const [type, setType] = useState<MethodType>();
  const [targetModalVisible, setTargetModalVisible] = useState(false);

  useEffect(() => {
    setTargetModalVisible(!targetModalVisible);
    Alert.alert(type ? type.toString() : '');
  }, [type]);

  return (
    <Container>
      <SelectMethodButton onPress={() => setTargetModalVisible(!targetModalVisible)}>
        송금 방식 선택하기
      </SelectMethodButton>
      <TargetModal
        modalVisible={targetModalVisible}
        onModalClosed={() => setTargetModalVisible(!targetModalVisible)}
        selected={type}
        setSelected={setType}
      />
    </Container>
  );
};

export default SelectTargetView;
