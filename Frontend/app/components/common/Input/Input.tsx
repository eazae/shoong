import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';
import styled from 'styled-components/native';

const TextInputSC = styled.TextInput`
  height: 40px;
  margin: 12px;
  border-width: 0.2px;
  border-radius: 5px;
  border-color: ${(props) => props.theme.textColor};
  padding: 10px;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.lightBgColor};
`;

interface InputProps {
  placeholder: string;
  keyboardType: 'numeric' | 'default';
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({ placeholder, keyboardType, disabled }) => {
  const [value, setValue] = useState('');

  return (
    <TextInputSC
      // style={styles.input}
      onChangeText={(curr) => setValue(curr)}
      value={value}
      placeholder={placeholder}
      keyboardType={keyboardType}
      editable={!disabled}
    />
  );
};

// const styles = StyleSheet.create({
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
// });

export default Input;
