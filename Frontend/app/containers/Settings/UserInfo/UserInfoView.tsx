import Avatar from '@components/common/Avatar';
import Divider from '@components/common/Divider/Divider';
import TextButton from '@components/common/TextButton/TextButton';
import { UserCircle } from 'phosphor-react-native';
import styled, { useTheme } from 'styled-components/native';
import { UserInfoType } from 'types/apiTypes';

const Container = styled.View`
  display: flex;
  align-items: center;
  padding-top: 30px;
`;

const Row = styled.View`
  width: 100%;
  background-color: ${(props) => props.theme.subBgColor};
  padding: 20px 25px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.Text`
  color: ${(props) => props.theme.textColor};
  font-size: 16px;
  font-weight: 600;
  text-align: left;
`;

const Content = styled.Text`
  color: ${(props) => props.theme.textSubColor};
  font-size: 16px;
  text-align: right;
`;

const EditButton = styled(TextButton)`
  text-align: end;
  justify-content: end;
  align-items: flex-end;
  display: flex;
`;
interface UserInfoViewProps {
  info: UserInfoType;
  setIsEdit: any;
}

const UserInfoView = ({ info, setIsEdit }: UserInfoViewProps) => {
  const theme = useTheme();

  return (
    <Container>
      {info.user_profile_image === 'deafult image url' ? (
        <UserCircle size={130} color={theme.subColor} weight="fill" />
      ) : (
        <Avatar uri={info.user_profile_image} isLoading={false} size="tab" />
      )}
      <Divider />
      <Divider />
      <Row>
        <Label>닉네임</Label>
        <Content>{info.user_nickname}</Content>
      </Row>
      <Row>
        <Label>전화번호</Label>
        <Content>{info.user_phone_number}</Content>
      </Row>
      <Row>
        <Label>이메일</Label>
        <Content>{info.user_email}</Content>
      </Row>
      <Divider />
      <Row>
        <Label>보유 카드 수</Label>
        <Content>{info.cards.length}</Content>
      </Row>
      <Row>
        <Label>가입일</Label>
        <Content>{`${info.createdAt[0]}.${info.createdAt[1]}.${info.createdAt[2]}`}</Content>
      </Row>
      <Divider />
      <EditButton title="정보 수정하기" onPress={() => setIsEdit(true)} />
    </Container>
  );
};

export default UserInfoView;
