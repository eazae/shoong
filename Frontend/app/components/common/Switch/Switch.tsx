import { colors } from '@theme/Color/Color';
import Palette from '@theme/Palette';
import React, { useState } from 'react';
import { Switch as RNSwitch } from 'react-native';
import styled from 'styled-components/native';

// const Sw = styled.Switch`
//   track-color {
//     color: #005555;
//     ${(props) => (props.ios_backgroundColor = '#005555')};
//   }
// `;

interface SwitchProps {
  isEnabled: boolean;
  onChange: (value: boolean) => void | Promise<void>;
}

export const Switch = ({ isEnabled, onChange }: SwitchProps) => {
  // const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <RNSwitch
      trackColor={{ false: colors.DARK_GREY, true: colors.PRIMARY }}
      thumbColor={isEnabled ? colors.WHITE : colors.WHITE}
      ios_backgroundColor={colors.LIGHT_GREY}
      // onValueChange={toggleSwitch}
      onValueChange={onChange}
      value={isEnabled}
    />
  );
};
