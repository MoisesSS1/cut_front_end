import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.ScrollView`
  background-color: #ffffff;
  flex: 1;
  padding-bottom: 40px;
`;

export const ContainerInputs = styled.View`
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  height: 450px;
`;

export const Input = styled.TextInput`
  height: 50px;
  width: 300px;
  background-color: #f1f1f1;
  border-color: #25f3f3;
  border-bottom-width: 6px;
  margin: 10px;
  border-radius: 10px 10px 0px 0px;
`;

export const Text = styled.Text`
  font-size: ${RFValue(18, 828)}px;
  margin-top: 20px;
  margin-bottom: 15px;
  font-weight: bold;
`;
