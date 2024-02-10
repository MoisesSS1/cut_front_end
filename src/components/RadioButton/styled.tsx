import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  min-height: 20px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin: 20px 30px;
  justify-content: space-around;
  background-color: #ffffff;
`;

export const Text = styled.Text`
  font-size: ${RFValue(18, 828)}px;
  color: #000000;
`;

export const Pressable = styled.Pressable`
  height: 30px;
  justify-content: center;
  padding: 0px 5px;
  align-items: center;
  border-radius: 20px;
`;
