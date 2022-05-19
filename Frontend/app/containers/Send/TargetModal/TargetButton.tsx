import styled, { useTheme } from 'styled-components/native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { MethodType } from '../SelectTargetView/SelectTargetView';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

const Container = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  padding: 8px 0px;
`;

const TabButtonIcon = styled.View`
  justify-content: center;
  margin: 8px;
`;

const Column = styled.View`
  flex-direction: column;
  /* justify-content: center; */
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.textColor};
  line-height: 25px;
  text-align: left;
  left: 0;
  padding-left: 10px;
`;

const Guide = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => props.theme.primaryLightColor};
  /* line-height: 30px; */
  text-align: left;
  left: 0;
  padding-left: 10px;
`;

// const TabIcon = styled.View`
//   margin-left: 8px;
// `;

const TabButtonContainer = styled.TouchableOpacity`
  width: 100%;
  /* height: 60px; */
  padding: 8px 16px;
  /* background-color: rgba(255, 255, 255, 0.1); */
  background-color: ${(props) => props.theme.subBgColor};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const RadioButtonView = styled.View`
  position: absolute;
  right: 0;
  align-self: center;
`;

interface TargetButtonProps {
  // onPress: any;
  icon?: object;
  title: string;
  guide: string;
  selected: MethodType | undefined;
  setSelected: any;
}

const TargetButton = ({
  // onPress,
  icon,
  title,
  guide,
  selected,
  setSelected,
}: TargetButtonProps) => {
  const [isChecked, setIsChecked] = useState(selected === title);
  const theme = useTheme();

  useEffect(() => {
    // Alert.alert(selected);
    setIsChecked(selected === title);
  }, [selected]);

  return (
    <Container onPress={() => setSelected(title)}>
      <TabButtonIcon>{icon}</TabButtonIcon>
      <Column>
        <Title>{title}</Title>
        <Guide>{guide}</Guide>
      </Column>
      <RadioButtonView>
        <BouncyCheckbox
          size={25}
          fillColor={theme.enabledColor}
          // unfillColor="white"
          // text="Custom Checkbox"
          // iconStyle={{ borderColor: 'red' }}
          // textStyle={{ fontFamily: 'JosefinSans-Regular' }}
          onPress={() => setSelected(title)}
          isChecked={isChecked}
        />
      </RadioButtonView>
    </Container>
  );
};

export default TargetButton;
