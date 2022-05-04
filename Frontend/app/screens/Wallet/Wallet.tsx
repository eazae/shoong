import Typography from '@theme/Typography';

import { ScrollView } from 'react-native';
import React from 'react';
import SecurityCard from '@containers/SecurityCard';
import Avatar from '@components/common/Avatar';
const Wallet = () => {
  // SecurityCard 임시
  return (
    <ScrollView>
      {/* <SecurityCard /> */}
      <Avatar
        size="small"
        isLoading={false}
        hasAlarm={true}
        uri="https://miro.medium.com/max/1400/1*G0ir6-FnfwtSuqug9AvGrA.jpeg"
      />
      {/* <Typography>지갑 화면</Typography> */}
    </ScrollView>
  );
};

export default Wallet;
