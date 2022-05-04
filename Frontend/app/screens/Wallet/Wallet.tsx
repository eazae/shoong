import Typography from '@theme/Typography';

import { ScrollView } from 'react-native';
import React from 'react';
import SecurityCard from '@containers/SecurityCard';
const Wallet = () => {
  return (
    <ScrollView>
      <SecurityCard />
      <Typography>지갑 화면</Typography>
    </ScrollView>
  );
};

export default Wallet;
