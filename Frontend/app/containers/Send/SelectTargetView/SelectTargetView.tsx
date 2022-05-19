import Avatar from '@components/common/Avatar';
import Dropdown from '@components/common/Dropdown';
import StrippedInput from '@components/common/StrippedInput/StrippedInput';
import Input from '@components/common/TextInput/TextInput';
import ScanScreen from '@components/QR/QRScan/QRScan';
import {
  getFriendList,
  getUserWithNickname,
  getUserWithPhone,
} from '@services/api/friends/friendsAPI';
import { theme } from '@storybook/react-native/dist/preview/components/Shared/theme';
import { Alien } from 'phosphor-react-native';
import { useEffect, useState } from 'react';
import { Alert, Text, TextInput } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import styled, { useTheme } from 'styled-components/native';
import { FriendType, UserInfoType } from 'types/apiTypes';
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

const TargetAddressLabel = styled.Text`
  color: ${({ theme }) => theme.textColor};
  padding: 32px 5px 10px 5px;
  font-size: 20px;
  font-weight: 700;
`;

const TargetAddress = styled.Text`
  color: ${({ theme }) => theme.textSubColor};
  padding: 0px 5px 10px 5px;
  font-size: 12px;
  /* font-weight: 500; */
`;

export type MethodType = '지갑주소' | '친구' | '닉네임' | 'QR코드' | '전화번호';

interface SelectTargetViewProps {
  targetAddress: string;
  setTargetAddress: any;
}
const SelectTargetView = ({ targetAddress, setTargetAddress }: SelectTargetViewProps) => {
  const theme = useTheme();
  const [type, setType] = useState<MethodType>();
  const [targetModalVisible, setTargetModalVisible] = useState(false);
  const [target, setTarget] = useState();
  // const [targetAddress, setTargetAddress] = useState<string | undefined>();

  /* 친구 목록 */
  // const [value, setValue] = useState(null);
  const [openFriendPicker, setOpenFriendPicker] = useState(false);
  const [friendList, setFriendList] = useState<Array<object>>([]);

  const [noSuchUser, setNoSuchUser] = useState(false);

  const onQRScan = (addr: string | undefined) => {
    if (addr !== undefined) setTargetAddress(addr);
  };

  const getTargetFriendList = async () => {
    const data = await getFriendList();
    //@ts-ignore
    let list = [];
    data.forEach((e: UserInfoType) => {
      // if (e.cards.length > 0) {
      list.push({
        label: e.user_nickname,
        value: e.cards[0].card_address,
        // icon: () => <Avatar uri={e.user_profile_image} />,
        selectable: e.cards.length > 0,
      });
      // }
    });
    //@ts-ignore
    setFriendList(list);
  };

  const getAddressByNickname = async () => {
    const { data } = await getUserWithNickname(target).catch(() => setNoSuchUser(true));
    setTargetAddress(data.cards[0].card_address);
    setNoSuchUser(false);
  };

  const getAddressByPhone = async () => {
    const { data } = await getUserWithPhone(target).catch(() => setNoSuchUser(true));
    setTargetAddress(data.cards[0].card_address);
    setNoSuchUser(false);
  };

  useEffect(() => {
    setTargetAddress('');
    setNoSuchUser(false);
  }, [target]);

  useEffect(() => {
    //  초기화 작업들
    setTargetModalVisible(!targetModalVisible);
    setTarget('');
    // setTargetAddress('');
    // setNoSuchUser(false);
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
          setValue={setTargetAddress}
          presetValue={targetAddress}
        />
      ) : type === '친구' ? (
        <DropDownPicker
          items={friendList}
          // value={target}
          placeholder="친구"
          // setValue={setTarget}
          open={openFriendPicker}
          setOpen={setOpenFriendPicker}
          // theme={theme.theme.toUpperCase()}
          // closeAfterSelecting={true}
          dropDownContainerStyle={{ borderColor: 'transparent' }}
          style={{ borderColor: 'transparent' }}
          onSelectItem={(item) => setTargetAddress(item.value)}
        />
      ) : type === '닉네임' ? (
        <>
          <TextInput
            placeholder="닉네임 입력"
            keyboardType="default"
            value={target}
            onChangeText={setTarget}
            onSubmitEditing={getAddressByNickname}
            returnKeyType="done"
            style={{
              paddingLeft: 5,
              fontSize: 24,
              fontWeight: '500',
              color: theme.textSubColor,
            }}
          />
          {noSuchUser ? (
            <Text style={{ color: theme.errorColor, paddingTop: 6, textAlign: 'right' }}>
              존재하지 않는 사용자입니다.
            </Text>
          ) : null}
        </>
      ) : // <StrippedInput
      //   placeholder="닉네임 입력"
      //   keyboardType="default"
      //   presetValue={target}
      //   setValue={setTarget}
      //   onSubmitEditing={Alert.alert('으악새')}
      // />
      type === 'QR코드' ? (
        <ScanScreen onScan={onQRScan} />
      ) : type === '전화번호' ? (
        <>
          <TextInput
            placeholder="전화번호 입력 ('-'제외)"
            keyboardType="phone-pad"
            value={target}
            onChangeText={setTarget}
            onSubmitEditing={getAddressByPhone}
            returnKeyType="done"
            style={{
              paddingLeft: 5,
              fontSize: 24,
              fontWeight: '500',
              color: theme.textSubColor,
            }}
          />
          {noSuchUser ? (
            <Text style={{ color: theme.errorColor, paddingTop: 6, textAlign: 'right' }}>
              존재하지 않는 사용자입니다.
            </Text>
          ) : null}
        </>
      ) : null}
      <TargetModal
        modalVisible={targetModalVisible}
        onModalClosed={() => setTargetModalVisible(!targetModalVisible)}
        selected={type}
        setSelected={setType}
      />
      {targetAddress ? (
        <>
          <TargetAddressLabel>지갑 주소</TargetAddressLabel>
          <TargetAddress>{targetAddress}</TargetAddress>
        </>
      ) : null}
    </Container>
  );
};

export default SelectTargetView;
