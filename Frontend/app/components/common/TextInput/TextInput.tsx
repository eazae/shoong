import { useState } from 'react';
import { Keyboard, View } from 'react-native';
import styled from 'styled-components/native';

const Label = styled.Text`
  color: ${(props) => props.theme.textColor};
  margin: 12px 16px;
`;
const TextInputComp = styled.TextInput`
  height: 50px;
  margin: 0px 16px 10px 16px;
  border-width: 0.2px;
  border-radius: 5px;
  border-color: ${(props) => props.theme.borderColor};
  padding: 10px;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.subBgColor};
`;

interface InputProps {
  placeholder: string;
  keyboardType: 'numeric' | 'default' | 'phone-pad';
  disabled?: boolean;
  label?: string;
  presetValue?: string;
  isPassword?: boolean;
  setValue: any;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  keyboardType,
  disabled,
  label,
  presetValue,
  isPassword,
  setValue,
}) => {
  // const [value, setValue] = useState(presetValue ?? '');

  return (
    <>
      {label ? <Label>{label}</Label> : null}
      <TextInputComp
        onChangeText={setValue}
        value={presetValue}
        placeholder={placeholder}
        keyboardType={keyboardType}
        editable={!disabled}
        secureTextEntry={isPassword}
      />
    </>
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
