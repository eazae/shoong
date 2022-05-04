import bip39 from 'react-native-bip39';

export const generateMnemonic = async () => {
  try {
    return await bip39.generateMnemonic(256); // default to 128
  } catch (e) {
    return false;
  }
};
