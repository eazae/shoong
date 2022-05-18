import styled from "styled-components/native";

export const Won = styled.Text`
  color: ${({ theme }) => theme.textColor};
`;

export const SendModal = styled.View`
position  : absolute;
background-color: ${({ theme }) => theme.mainBgColor};
border: 1px solid black;
width: 80%;
align-items: center;
top: 25%;
left: 10%;
height: 60%;
z-index: 999;
overflow: hidden;
`;

export const Close = styled.Image`
width: 25px;
height: 25px;
top: 5%;
right: 5%;
position: absolute;
`;