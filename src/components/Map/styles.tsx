import styled from "styled-components/native";
import global from "../../global/global";

export const Content = styled.View`
  align-items: center;
  margin: 30px;
`;

export const Balon = styled.View`
  height: 30px;
  width: 30px;
  border-radius: 100px;
  background-color: ${global.theme.colors.black};
  justify-content: center;
  align-items: center;
`;

export const ImgUser = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: 100px;
`;

export const ImgTriangle = styled.Image`
  height: 30px;
  width: 30px;
`;
