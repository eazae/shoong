import { Switch } from '@components/common/Switch/Switch';
import { View } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.subBgColor};
`;

const Label = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.textColor};
  line-height: 30px;
`;

interface SettingsItemProps {
  label: string;
  isEnabled: boolean;
  onChange: (value: boolean) => void | Promise<void>;
}

const SettingsItem: React.FC<SettingsItemProps> = ({ label, isEnabled, onChange }) => {
  return (
    <>
      <Container>
        <Label>{label}</Label>
        <Switch isEnabled={isEnabled} onChange={onChange} />
      </Container>
    </>
  );
};

export default SettingsItem;
