// REFERENCE: /BlockChain/mnemonic/getWalletKey by 박종선
// Author: Yoon Baek

import bip39 from 'react-native-bip39';
import { hdkey } from 'ethereumjs-wallet';
import { getSecureStoreValue, setSecureStoreValue } from '@utils/secureStore';
import { serialize } from '@utils/serialize';
import instance from '@services/api/axios';

export const getDefaultCardName = (address) => address;

export const generateMnemonic = async () => {
  try {
    return await bip39.generateMnemonic(128); // default to 128
  } catch (e) {
    return false;
  }
};

const validateMnemonic = (mnemonicWords) => {
  const txt = mnemonicWords.join(' ');
  return [bip39.validateMnemonic(txt), txt];
};

export const getCardByMnemonic = async (key, mnemonicWords) => {
  const [isValidKey, mnemonicKey] = validateMnemonic(mnemonicWords);

  if (!isValidKey) {
    return;
  }
  const masterKey = await mnemonicToMasterKey(mnemonicKey);
  // 니모닉키를 이용한 기본주소
  // deriveChild값에 따라서 추가로 지갑 계속 생성가능
  const childKey = masterKey.deriveChild(key);

  const card = childKey.getWallet();
  // 지갑 주소
  const cardAddress = card.getAddressString();

  // // 개인키 니모닉키와 함께 **유출 금지**
  const cardPvKey = card.getPrivateKeyString();

  return { cardAddress, cardPvKey };
};

const mnemonicToMasterKey = async (mnemonicKey) => {
  const seed = await bip39.mnemonicToSeed(mnemonicKey);
  const rootKey = hdkey.fromMasterSeed(seed);
  const masterKey = rootKey.derivePath("m/44'/60'/0'/0");

  return masterKey;
};

export const storeCardKeys = async (card) => {
  // 카드 리스트를 확인
  const cards = JSON.parse(await getSecureStoreValue('Cards')) || [];
  cards.push(card);

  await setSecureStoreValue('Cards', serialize(cards))
    .then(() => console.log('done'))
    .catch((err) => console.log(err));
};

// API 나오면 추가할 예정 - YoonBaek
export const carPOSTapi = async (data) => {
  return await instance.post('/user/makeCard', data);
};
