import styled from "styled-components/native";
import global from "../../global/global";

export const Container = styled.View`
  width: 100%;
  height: 100px;
  background-color: ${global.theme.colors.white};
  border-top: 1px solid #ccc;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 0px 20px;
  margin: 5px 0px 0px 0px;
  border-radius: 0px;
`;

export const BoxIcon = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DescIcon = styled.Text`
  font-size: 15px;
  color: ${global.theme.colors.gray2};
  font-weight: bold;
  padding-top: 10px;
`;
