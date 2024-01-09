import styled from "styled-components/native";

export const Container = styled.View`
  background-color: white;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
`;

export const ContainerInputs = styled.View`
  background-color: white;
  justify-content: center;
  align-items: center;
  flex: 1;
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

export const BoxSearchAddress = styled.View`
  border-radius: 10px 10px 0px 0px;
  width: 300px;
  margin: 10px;
  display: flex;
  border-color: #25f3f3;
  border-bottom-width: 6px;
  align-items: center;
  flex-direction: row;
`;

export const Text = styled.Text`
  font-size: 18px;
  margin-top: 20px;
  font-weight: bold;
`;
