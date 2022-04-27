import React from 'react';

import { useEffect } from 'react';
import { Text, View } from 'react-native';

const Test = (props) => {
  useEffect(() => {
    console.log(props.testing);
  }, []);
  return <Text>sdf{props.testing}</Text>;
};

Test.defaultProps = {
  testing: process.env.API_KEY,
};

export default Test;
