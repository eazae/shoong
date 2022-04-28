import { Text, View } from 'react-native';
import { API_BASE_URL } from '@env';
import { useEffect } from 'react';

const Test = () => {
  useEffect(() => {
    console.log(API_BASE_URL);
  });
  return (
    <View>
      <Text>{API_BASE_URL}</Text>
    </View>
  );
};

export default Test;
