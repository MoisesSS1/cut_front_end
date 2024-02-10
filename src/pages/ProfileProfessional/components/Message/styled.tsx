import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  position: relative;
  top: 50%;
  z-index: 1;
  border-radius: 20px;
  margin: 0px auto;
  background-color: #fc3636;
  padding: 20px;
`;

export const Title = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: ${RFValue(18, 828)}px;
  color: black;
`;
