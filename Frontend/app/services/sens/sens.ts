// SENS: NAVER CLOUD PLATFORM - SIMPLE EASY NOTIFICATION SERVICE

import axios from 'axios';
import { accessKey, secretKey, serviceId } from './secret';

const CryptoJS = require('crypto-js');

export const SENS_URL = 'https://sens.apigw.ntruss.com/';

export const makeSignature = (method: string, url: string) => {
  const space = ' ';
  const newLine = '\n';
  const timeStamp = `${Date.now()}`;
  const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);

  hmac.update(method);
  hmac.update(space);
  hmac.update(url);
  hmac.update(newLine);
  hmac.update(timeStamp);
  hmac.update(newLine);
  hmac.update(accessKey);

  const hash = hmac.finalize();

  return hash.toString(CryptoJS.enc.Base64);
};

const sensInstance = axios.create({
  baseURL: `${SENS_URL}`,
  headers: {
    'Content-Type': 'application/json',
    'x-ncp-apigw-timestamp': `${Date.now()}`,
    'x-ncp-iam-access-key': accessKey,
    'x-ncp-apigw-signature-v2': makeSignature('POST', `/sms/v2/services/${serviceId}/messages`),
  },
});

export const getSENSRequestBodyData = (to: string, content: string) => {
  return {
    type: 'SMS',
    contentType: 'COMM',
    countryCode: '82',
    from: '01067773929',
    messages: [{ to }],
    content,
  };
};

export const getVerificationDigits = () => {
  let digits = '';
  const getRandomDigit = () => Math.floor(Math.random() * 10);

  for (let i = 0; i < 6; i++) {
    digits += getRandomDigit();
  }

  return digits;
};

export const getMessage = (nickname: string, digits: string) =>
  `${nickname}님 반가워요\nSHOONG 가입을 환영합니다!\n인증번호[${digits}]를 입력해주세요`;

export interface requestBody {
  type: 'SMS';
  contentType: 'COMM';
  countryCode: '82';
  from: '01067773929';
  subject?: string;
  content: string;
  messages: [
    {
      to: string;
      subject?: string;
      content?: string;
    }
  ];
  files?: [
    {
      name?: string;
      body?: string;
    }
  ];
  reserveTime?: string;
  reserveTimeZone?: string;
  scheduleCode?: string;
}

export default sensInstance;
