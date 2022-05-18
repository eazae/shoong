// REFERENCE: /BlockChain/mnemonic/getWalletKey by 박종선
// Author: Yoon Baek

import bip39 from 'react-native-bip39';
import { hdkey } from 'ethereumjs-wallet';
import { getSecureStoreValue, setSecureStoreValue } from '@utils/secureStore';
import { serialize } from '@utils/serialize';
import instance from '@services/api/axios';
import { getCards } from '@services/api/card/cardAPI';
import * as SecureStore from 'expo-secure-store';
import { defaultCardBg } from '@containers/CardLarge/CardLarge';

// export const getDefaultCardName = (address) => address;
const MNEMONIC_KEY = 'Mnemonic';

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

// CASE masterkey doesn't exists
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
  const card_address = card.getAddressString();

  // // 개인키 니모닉키와 함께 **유출 금지**
  const card_pv_key = card.getPrivateKeyString();

  return { card_address, card_pv_key };
};

// CASE masterKey Exists
export const createCard = async () => {
  const length = (await getCards()).length;
  let mnemonic = await getSecureStoreValue(MNEMONIC_KEY);
  const masterKey = await mnemonicToMasterKey(mnemonic);

  const card = masterKey.deriveChild(length).getWallet();
  const card_address = card.getAddressString();
  const card_pv_key = card.getPrivateKeyString();

  const data = {
    card_address,
    card_name: `내 카드 ${length + 1}`,
    card_profile_image: defaultCardBg,
  };
  carPOSTapi(data)
    .then(() => storeCardKeys({ card_address, card_pv_key }))
    .catch((err) => alert(err));
};

const mnemonicToMasterKey = async (mnemonicKey) => {
  const seed = await bip39.mnemonicToSeed(mnemonicKey);
  const rootKey = hdkey.fromMasterSeed(seed);
  const masterKey = rootKey.derivePath("m/44'/60'/0'/0");

  await SecureStore.deleteItemAsync(MNEMONIC_KEY).then(
    async () => await setSecureStoreValue(MNEMONIC_KEY, mnemonicKey)
  );
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

export const carPOSTapi = async (data) => {
  return await instance.post('/user/makeCard', data);
};
