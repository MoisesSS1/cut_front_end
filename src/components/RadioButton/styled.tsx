import styled from "styled-components/native";

export const Container = styled.View`
  height: 20px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  justify-content: space-around;
  background-color: #ffffff;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: #000000;
`;

export const Pressable = styled.Pressable`
  height: 30px;
  width: 70px;
  justify-content: center;
  padding: 0px 5px;
  align-items: center;
  border-radius: 20px;
`;
