import { isLoggedInState } from '@atoms/atoms';
import Button from '@components/common/Button';
import { useNavigation } from '@react-navigation/native';
import { ILogin } from '@screens/Login/Login.props';
import { login } from '@services/api/user/userAPI';
import Typography from '@theme/Typography';
import { useFormContext } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components/native';
import { IJoin } from '../Join.props';

const JoinSuccess = () => {
  const { getValues } = useFormContext<IJoin>();
  const { navigate } = useNavigation();
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const goToWallet = () => {
    const email = getValues('email');
    const passWord = getValues('passWord');
    login({ email, passWord }).then(() => setIsLoggedIn(true));
    navigate('Tabs');
  };

  return (
    <LayOut>
      <CongratSep />
      <Congrats>
        <Typography size="h1">축하합니다!</Typography>
        <Typography size="h1">지갑과 SHOONG이 연결됐어요</Typography>
        <CongratSep />
        <Typography size="body1">보안카드를 잃어버리지 않도록 주의하세요</Typography>
      </Congrats>
      <Button onPress={goToWallet} title="송금해보러 가기" />
    </LayOut>
  );
};

export default JoinSuccess;

const LayOut = styled.View`
  padding: 50px 20px;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

const Congrats = styled.View`
  align-items: center;
`;

const CongratSep = styled.View`
  height: 10px;
`;
