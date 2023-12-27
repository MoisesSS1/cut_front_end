import styled from "styled-components/native";

export const BoxServiceContainer = styled.View`
  min-width: 120px;
  margin: 0px 10px;
  height: 150px;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const BoxImg = styled.View`
  height: 100px;
  width: 100%;
  align-items: center;
  margin-bottom: 10px;
`;

export const IconService = styled.View`
  height: 80%;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`;

export const NameService = styled.Text`
  font-weight: bold;
  padding: 10px 0px;
  font-size: 18px;
`;

export const DescriptionService = styled.View`
  align-items: center;
`;

export const ValueService = styled.Text`
  margin: 3px 0px;
  font-size: 16px;
  font-weight: bold;
`;

export const SelectService = styled.View<{ $select: boolean }>`
  margin-top: 5px;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  border: 2px;
  background-color: ${(props) => (props.$select ? "#030303" : "#ffffff")};
`;
