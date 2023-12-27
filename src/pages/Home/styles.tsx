import styled from "styled-components/native";
import global from "../../global/global";

export const Container = styled.View`
  flex: 1;
  padding-top: 60px;
  background-color: white;
`;

export const BoxAdress = styled.View`
  padding: 0px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const Content = styled.View`
  margin: 20px 10px;
  height: 80%;
  background-color: ${global.theme.colors.white};
`;
