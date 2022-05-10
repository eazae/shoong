// import { Switch as RNSwitch } from 'react-native';
import styled from 'styled-components/native';

const SwitchComp = styled.Switch.attrs((props) => ({
  trackColor: { false: props.theme.disabledColor, true: props.theme.enabledColor },
  thumbColor: props.value ? 'white' : 'white',
  // ios_backgroundColor: props.theme.mainBgColor,
}))``;

interface SwitchProps {
  isEnabled: boolean;
  onChange: (value: boolean) => void | Promise<void>;
}

export const Switch = ({ isEnabled, onChange }: SwitchProps) => {
  // const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return <SwitchComp onValueChange={onChange} value={isEnabled} />;
};
