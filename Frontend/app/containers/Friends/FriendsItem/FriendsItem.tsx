import styled from 'styled-components/native';

const mock = {
  nickname: '닉네입별면',
  phone: '010-9999-9999',
};

const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const Nickname = styled.Text`
  color: ${(props) => props.theme.textColor};
`;

const Phone = styled.Text`
  color: ${(props) => props.theme.textColor};
`;
const FriendsItem = () => {
  return (
    <Container>
      <Nickname>{mock.nickname}</Nickname>
      <Phone>{mock.phone}</Phone>
    </Container>
  );
};

export default FriendsItem;
