import Dropdown from '@components/common/Dropdown';
import StrippedInput from '@components/common/StrippedInput/StrippedInput';
import Input from '@components/common/TextInput/TextInput';
import ScanScreen from '@components/QR/QRScan/QRScan';
import { getFriendList } from '@services/api/friends/friendsAPI';
import { theme } from '@storybook/react-native/dist/preview/components/Shared/theme';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import styled from 'styled-components/native';
import { FriendType } from 'types/apiTypes';
import TargetModal from '../TargetModal/TargetModal';

const Container = styled.View`
  display: flex;
  /* margin-top: 10px; */
  padding: 10px;
`;

const SelectMethodButton = styled.Text`
  font-weight: 600;
  color: ${({ theme }) => theme.textSubColor};
`;

const MethodTypeLabel = styled.Text`
  color: ${({ theme }) => theme.textColor};
  padding: 16px 5px 10px 5px;
  font-size: 20px;
  font-weight: 700;
`;

export type MethodType = '지갑주소' | '친구' | '닉네임' | 'QR코드' | '전화번호';

interface SelectTargetViewProps {
  // type: string;
  presetTarget?: string;
}
const SelectTargetView = ({ presetTarget }: SelectTargetViewProps) => {
  const [type, setType] = useState<MethodType>();
  const [targetModalVisible, setTargetModalVisible] = useState(false);
  const [target, setTarget] = useState(presetTarget);
  const [targetAddress, setTargetAddress] = useState<string | undefined>();

  const [friendList, setFriendList] = useState<Array<object>>([]);

  const onQRScan = (addr: string | undefined) => {
    if (addr !== undefined) setTargetAddress(addr);
  };

  const getTargetFriendList = async () => {
    const { status, data } = await getFriendList();
    if (status === 200) {
      Alert.alert(JSON.stringify(data));
      //@ts-ignore
      let list = [];
      data.forEach((e: FriendType) =>
        list.push({ label: e.user_nickname, value: e.user_nickname })
      );
      setFriendList(list);
    }
  };

  useEffect(() => {
    setTargetModalVisible(!targetModalVisible);
    if (type === '친구') getTargetFriendList();
  }, [type]);

  return (
    <Container>
      <SelectMethodButton onPress={() => setTargetModalVisible(!targetModalVisible)}>
        송금 방식 선택하기
      </SelectMethodButton>
      <MethodTypeLabel>{type}</MethodTypeLabel>
      {type === '지갑주소' ? (
        <Input
          keyboardType="default"
          placeholder={type}
          setValue={setTarget}
          presetValue={target}
        />
      ) : type === '친구' ? (
        <DropDownPicker items={friendList} value={friendList} />
      ) : type === '닉네임' ? (
        <StrippedInput
          placeholder={type}
          keyboardType="numeric"
          presetValue={target}
          setValue={setTarget}
        />
      ) : type === 'QR코드' ? (
        <ScanScreen onScan={onQRScan} />
      ) : type === '전화번호' ? (
        <Input
          keyboardType="phone-pad"
          placeholder={type}
          setValue={setTarget}
          presetValue={target}
        />
      ) : null}
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
