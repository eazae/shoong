import Avatar from '@components/common/Avatar';
import Divider from '@components/common/Divider/Divider';
import styled from 'styled-components/native';
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

interface UserInfoViewProps {
  info: UserInfoType;
}

const UserInfoView = ({ info }: UserInfoViewProps) => {
  return (
    <Container>
      <Avatar uri={info.user_profile_image} size="large" isLoading={false} />
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
        <Content>{new Date(info.createdAt).toLocaleDateString()}</Content>
      </Row>
    </Container>
  );
};

export default UserInfoView;
