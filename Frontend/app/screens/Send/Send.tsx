import { ScrollView, Text, View, StyleSheet, Image, Alert, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import EasySendAndReceive from '@containers/EasySendAndReceive';
import ExpandableView from '@containers/ExpandableView';
import Button from '@components/common/Button';
import { SendConfirm } from './SendConfirm';
import SelectToken from '@containers/SelectToken';
import { theme } from '@storybook/react-native/dist/preview/components/Shared/theme';
import Typography from '@theme/Typography';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import Input from '@components/common/Input';
import ProgressTab from '@containers/Send/ProgressTab/ProgressTab';
import Divider from '@components/common/Divider/Divider';
import styled from 'styled-components/native';
import TokenItem from '@containers/Send/TokenList/TokenItem';
import coinImgUri from '@utils/CoinVariations';
import TokenList from '@containers/Send/TokenList/TokenList';

interface SendProps {
  address: string;
}
interface ExpandProp {
  width: string;
  height: string;
}

const Container = styled.View`
  padding: 0px 10px;
`;

const Send: React.FC<SendProps> = ({ address }) => {
  const [card, setCard] = useState({
    width: WIDTH,
    height: HEIGHT,
  });
  const [target, setTarget] = useState({
    width: FOLDED,
    height: FOLDED,
  });
  const [token, setToken] = useState({
    width: FOLDED,
    height: FOLDED,
  });
  const [amount, setAmount] = useState({
    width: FOLDED,
    height: FOLDED,
  });
  const [visible, setVisible] = useState(false);
  const [nick, setNick] = useState('');
  const [phone, setPhone] = useState('');

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  // @신지우
  // 현재 선택된 단계
  const [focus, setFocus] = useState(1);
  const [selectedToken, setSelectedToken] = useState('');

  //토큰
  //수량

  const expnadSwitch = (val: ExpandProp) => {
    const list = [card, target, token, amount];
    const setList = [setCard, setTarget, setToken, setAmount];
    for (let i = 0; i < list.length; i++) {
      if (list[i] === val) {
        setList[i]({
          width: WIDTH,
          height: HEIGHT,
        });
      } else
        setList[i]({
          width: FOLDED,
          height: FOLDED,
        });
    }
  };
  if (from) {
    expnadSwitch(target);
  }
  useEffect(() => {
    () => {
      setFrom(address);
    };
  }, [address]);
  const goConfirm = () => {
    //트랜잭션 id 들고 페이지 넘기기
    navigate('Send', { screen: 'SendConfirm' });
  };
  const { navigate } = useNavigation();
  return (
    <Container>
      <ScrollView nestedScrollEnabled={true}>
        {/* <Button
        title="송금 카드 선택"
        onPress={() => {
          expnadSwitch(card);
        }}
      /> */}
        <Divider size="small" />
        <ProgressTab
          title="송금 카드 선택"
          index={1}
          onPress={() => {
            expnadSwitch(card);
            setFocus(1);
          }}
          isFocus={focus === 1}
        />
        {focus === 1 ? (
          <ExpandableView width={card.width} height={card.height}>
            <Text>11</Text>
            {/* 카드 선택  */}
            {/* from */}
          </ExpandableView>
        ) : null}
        <Divider size="small" />
        {/* <Button
        title="송금 대상 선택"
        onPress={() => {
          expnadSwitch(target);
        }}
      /> */}
        <ProgressTab
          title="송금 대상 선택"
          index={2}
          onPress={() => {
            expnadSwitch(target);
            setFocus(2);
          }}
          isFocus={focus === 2}
        />
        {focus === 2 ? (
          <ExpandableView width={target.width} height={target.height}>
            <EasySendAndReceive address={to} />
          </ExpandableView>
        ) : null}
        <Divider size="small" />
        {/* <Button
        title="토큰 종류 선택"
        onPress={() => {
          expnadSwitch(token);
        }}
      /> */}
        <ProgressTab
          title="토큰 종류 선택"
          index={3}
          onPress={() => {
            expnadSwitch(token);
            setFocus(3);
          }}
          isFocus={focus === 3}
        />
        {focus === 3 ? (
          <ExpandableView width={token.width} height={token.height}>
            {/* <SelectToken /> */}
            {/* token */}
            <TokenList selectedToken={selectedToken} setSelectedToken={setSelectedToken} />
          </ExpandableView>
        ) : null}
        <Divider size="small" />
        {/* <Button
        title="송금 수량 입력"
        onPress={() => {
          expnadSwitch(amount);
        }}
      /> */}
        <ProgressTab
          title="송금 수량 입력"
          index={4}
          onPress={() => {
            expnadSwitch(amount);
            setFocus(4);
          }}
          isFocus={focus === 4}
        />
        {focus === 4 ? (
          <ExpandableView width={amount.width} height={amount.height}>
            {/* 송금 수량 입력 */}
            {/* amount */}
            <Input
              label="송금 수량"
              placeholder="수량 입력"
              type="numeric"
              onChange={(e) => {
                console.log(e);
              }}
            />
          </ExpandableView>
        ) : null}

        <Divider size="small" />
        <Button
          title="송 금"
          onPress={() => {
            setVisible(true);
          }}
        />
        {visible === true && (
          <View style={styles.send}>
            <Typography size="body1">송금내용을 확인할게요!</Typography>
            <Typography size="body3">{nick !== '' && nick}</Typography>
            <Typography size="body3">{phone !== '' && phone}</Typography>
            <Typography size="body3">
              {nick === '' && phone === '' && to.substring(0, 7) + '...'}
            </Typography>
            <Typography size="body3">님에게</Typography>
            {/* <Typography size='body3'>{token} 토큰</Typography>
                    <Typography size='body3'>{amount}개 보낼게요!</Typography> */}
            <Button
              title="네 맞아요!"
              onPress={async () => {
                let transaction = '';
                // api call
                // transaction = await();
                goConfirm();
              }}
            ></Button>
          </View>
        )}
      </ScrollView>
    </Container>
  );
};

export default Send;

const WIDTH = '100%';
const HEIGHT = '300px';
const FOLDED = '0px';

const styles = StyleSheet.create({
  send: {
    position: 'absolute',
    backgroundColor: theme.backgroundColor,
    width: '80%',
    alignItems: 'center',
    top: '25%',
    left: '10%',
    height: 400,
    zIndex: 999,
  },
});
