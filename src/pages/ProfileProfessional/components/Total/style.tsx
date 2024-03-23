import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const ContainerPayment = styled.View`
  height: 11%;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #f6f6ff;
  flex-direction: row;
  align-items: center;
`;

export const BoxInfo = styled.View`
  align-items: left;
  justify-content: center;
  padding-left: 40px;
  width: 50%;
`;
export const ValueTotal = styled.Text`
  font-size: ${RFValue(18, 828)}px;
  font-weight: bold;
`;

export const ButtonFinishOrde = styled.TouchableOpacity`
  background-color: #e61d51;
  height: 50%;
  margin-left: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 150px;
`;
export const TextButton = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
`;
