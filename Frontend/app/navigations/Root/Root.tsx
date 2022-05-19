import JoinNav from '@navigations/JoinNav';
import Tabs from '@navigations/Tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '@screens/Login';
import { getJWTValue } from '@utils/secureStore';
import { isLoggedInState } from '@atoms/atoms';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { isJWTValid } from '@services/api/user/userAPI';
import SendNav from '@navigations/SendNav';
import Details from '@navigations/Details';
import { useQuery } from 'react-query';
import { CoinPriceType } from 'types/apiTypes';
import { getPrice } from '@services/web3/getPrice';

const Nav = createNativeStackNavigator();

const Root = () => {
  const { data: decentraland } = useQuery<CoinPriceType>(['coinPrice', 'decentraland'], () =>
    getPrice('decentraland')
  );
  const { data: ethereum } = useQuery<CoinPriceType>(['coinPrice', 'ethereum'], () =>
    getPrice('ethereum')
  );
  const { data: tether } = useQuery<CoinPriceType>(['coinPrice', 'tether'], () =>
    getPrice('tether')
  );
  const { data: solana } = useQuery<CoinPriceType>(['coinPrice', 'solana'], () =>
    getPrice('solana')
  );
  // test
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);

  useEffect(() => {
    getJWTValue().then((jwt) => {
      if (jwt)
        isJWTValid(jwt).then((res) => {
          if (res.status === 200) {
            setIsLoggedIn(() => true);
          }
        });
      // .catch((err) => console.log('25', err));
    });
  }, [isLoggedIn]);

  return (
    <Nav.Navigator screenOptions={{ presentation: 'modal', headerShown: false }}>
      {isLoggedIn ? (
        <>
          <Nav.Screen name="Tabs" component={Tabs} />
          <Nav.Screen name="Send" component={SendNav} />
          <Nav.Screen name="Details" component={Details} />
        </>
      ) : (
        <>
          <Nav.Screen name="LogIn" component={Login} />
          <Nav.Screen name="Join" component={JoinNav} />
        </>
      )}
    </Nav.Navigator>
  );
};

export default Root;
