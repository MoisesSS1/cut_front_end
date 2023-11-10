import styled from "styled-components/native";
import global from "../../global/global";

export const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export const BoxAdress = styled.View`
  margin: 15px 20px;
  padding: 0px 20px;
  border-radius: 5px;
  height: 7%;
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: ${global.theme.colors.gray};
`;

export const TextAdress = styled.TextInput`
  width: 100%;
  margin-left: 10px;
  font-size: 15px;
  font-weight: ${global.theme.font.bold};
`;

export const Content = styled.View`
  margin: 20px 10px;
  height: 72%;
  background-color: ${global.theme.colors.white};
`;
