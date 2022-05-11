import axios from 'axios';
import { Alert } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { getJWTValue, getSecureStoreValue, setSecureStoreValue } from '@utils/secureStore';
import { API_BASE_URL } from '@env';

const instance = axios.create({
  baseURL: API_BASE_URL + '/api/',
  timeout: 30000,
  headers: {
    'Content-type': 'application/json',
    'Access-Control-Allow-Credentials': true,
  },
});

/* Apply Interceptor */
// HTTP request interceptor
instance.interceptors.request.use(
  (config) => {
    const jwt = getJWTValue();
    if (jwt) {
      config.headers!.Authorization = 'Bearer ' + jwt;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// HTTP response interceptor
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    if (error.response) {
      console.log(error.response);
      switch (error.response.status) {
        /* 'JWT expired' exeption */
        case 400:
          console.log('400 ERROR, not authorized.');
          break;
        case 401:
          console.log('401error!');
          Alert.alert('문제가 발생했습니다. 잠시 후 시도해주세요.');
          break;
        case 404:
          console.log('404error!');
          break;
        case 409:
          console.log('409error!');
          break;
        default:
      }
    } else {
      // ex. 서버 키지 않은 경우
    }
    return Promise.reject(error);
  }
);

export const multipartInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': `multipart/form-data`,
  },
});

export default instance;
