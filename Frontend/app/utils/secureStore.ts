import * as SecureStore from 'expo-secure-store';
import { Alert } from 'react-native';

/* JWT 저장 */
export const setJWTValue = async (jwt: string) => {
  await SecureStore.setItemAsync('jwt', jwt);
};

export const getJWTValue = async () => {
  let result = await SecureStore.getItemAsync('jwt');
  return result;
};

export const clearJWTValue = async () => {
  await SecureStore.deleteItemAsync('jwt', { requireAuthentication: true });
};

// https://docs.expo.dev/versions/latest/sdk/securestore/
export const setSecureStoreValue = async (key: string, value: string) => {
  await SecureStore.setItemAsync(key, value);
};

export const getSecureStoreValue = async (key: string) => {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    Alert.alert("🔐 Here's your value 🔐 \n" + result);
  } else {
    Alert.alert('No values stored under that key.');
  }
};

// export default { setSecureStoreValue, getSecureStoreValue };
