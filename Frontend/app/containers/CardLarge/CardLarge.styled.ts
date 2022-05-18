import styled from 'styled-components/native';

export const LayOut = styled.View``;

export const CardLayOut = styled.ImageBackground`
  overflow: hidden;
  background-color: ${({ theme }) => theme.cardColor};
  border-radius: 10px;
  height: 222px;
  margin-bottom: 10px;
  justify-content: space-between;
  /* padding: 20px; */
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Body = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Bottom = styled.View`
  justify-content: flex-end;
  align-items: flex-end;
  margin: 10px;
`;

export const Filter = styled.View<{ isDark: boolean }>`
  background-color: ${({ isDark }) => (isDark ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.4)')};
  height: 160px;
  padding: 20px;
  justify-content: space-between;
`;

export const BtnLayOut = styled.View`
  width: 31%;
`;

export const ButtonsLayOut = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
