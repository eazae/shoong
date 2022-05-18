import * as SecureStore from 'expo-secure-store';

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
  const result = await SecureStore.getItemAsync(key);

  return result!;
};

// export default { setSecureStoreValue, getSecureStoreValue };
