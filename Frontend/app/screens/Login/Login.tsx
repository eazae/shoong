import LoginHeader from '@components/layout/LoginHeader';
import LoginAuth from '@containers/LoginAuth';
import { isIos } from '@utils/native';
import { ScreenLayOut, LayOut } from './Login.styled';

const uri =
  'https://cdn.akamai.steamstatic.com/steam/apps/1445010/ss_0297bc62fe54690c0dfc8b79f5a61cf23c129802.1920x1080.jpg?t=1629529211';

const slogans = '세상에서 가장 쉽고 편한 / 내 손 안의 블록체인 송금'.split(' / ');

const Login = () => {
  return (
    <ScreenLayOut>
      <LayOut behavior={isIos() ? 'padding' : 'height'}>
        <LoginHeader slogans={slogans} logoUri={uri} />
        <LoginAuth />
      </LayOut>
    </ScreenLayOut>
  );
};

export default Login;
