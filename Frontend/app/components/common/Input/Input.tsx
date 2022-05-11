import { useState } from 'react';
import { Keyboard } from 'react-native';
import { IInput } from './Input.props';
import {
  Error,
  ErrorMessage,
  Label,
  LabelMessage,
  KeyboardArea,
  TextInput,
  LayOut,
} from './Input.styled';

const Input: React.FC<IInput> = ({
  type = 'default',
  label,
  onBlur,
  error,
  onChange,
  placeholder,
  value,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <KeyboardArea onPress={Keyboard.dismiss}>
      <LayOut>
        {label ? (
          <LabelMessage>
            <Label weight="bold" size="body1">
              {label}
            </Label>
          </LabelMessage>
        ) : null}
        <TextInput
          secureTextEntry={type === 'password'}
          error={error || ''}
          onBlur={() => {
            setIsFocused(false);
            return onBlur;
          }}
          autoCapitalize="none"
          onChangeText={onChange}
          placeholder={placeholder}
          value={value}
          onFocus={() => setIsFocused(true)}
          isFocused={isFocused}
          keyboardType={type !== 'password' ? type : 'default'}
        />
        {error ? (
          <ErrorMessage>
            <Error size="body3" color="error">
              {error}
            </Error>
          </ErrorMessage>
        ) : null}
      </LayOut>
    </KeyboardArea>
  );
};

export default Input;
