import Button from '@components/common/Button';
import { useNavigation } from '@react-navigation/native';
import Color from '@theme/Color';
import { textColorNames } from '@theme/Color/Color.props';
import Size from '@theme/Typography/Size';
import { ArrowLeft } from 'phosphor-react-native';
import { HeaderLayOut } from './HeaderGoBackBtn.styled';

interface IHeaderGoBackBtn {
  title?: string;
  color?: textColorNames;
}

const HeaderGoBackBtn = ({ title = '이전', color = 'primary' }: IHeaderGoBackBtn) => {
  const { goBack } = useNavigation();
  return (
    <HeaderLayOut>
      <Button
        onPress={goBack}
        variant="transparent"
        icon={<ArrowLeft size={Size.body1} color={Color.textColor[color]} />}
        title={title}
      />
    </HeaderLayOut>
  );
};

export default HeaderGoBackBtn;
