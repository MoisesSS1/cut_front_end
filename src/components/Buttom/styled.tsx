import styled from "styled-components/native";

export const ContainOptions = styled.View<{ $color?: string }>`
  width: 250px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.$color || "#a9e6e6"};
  height: 60px;
  border-radius: 10px;
  margin: 20px;
`;

export const Option = styled.Text`
  font-weight: bold;
  border-radius: 10px;
  font-size: 18px;
`;
