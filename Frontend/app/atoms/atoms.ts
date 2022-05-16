import { atom } from 'recoil';

/* Sample code */
// export const sampleState = atom({
//   key: 'exState', // unique ID (with respect to other atoms/selectors)
//   default: '', // default value (aka initial value)
// });

/* 로그인 상태 */
export const isLoggedState = atom({
  key: 'isLoggedState',
  default: false,
});

/* 앱 테마 변경 */
export const changeAppTheme = atom({
  key: 'changeAppTheme',
  default: false,
});
