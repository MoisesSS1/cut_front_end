import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Text = styled.Text`
  font-size: ${RFValue(18, 828)}px;
  font-weight: bold;
`;

export const BtnOption = styled.TouchableOpacity`
  margin: 20px 0px;
`;
