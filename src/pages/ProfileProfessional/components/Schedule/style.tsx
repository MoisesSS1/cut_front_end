import styled from "styled-components/native";

export const ContainerSchedule = styled.View`
  background-color: #ffffff;
  height: 32%;
`;

export const InforDays = styled.View`
  height: 60px;
  margin: 20px 20px 20px 10px;
  align-items: center;
  justify-content: center;
`;
export const BoxDays = styled.View`
  margin: 10px;
  justify-content: center;
  align-items: center;
  width: 40px;
`;

export const HoursDisponibility = styled.View`
  height: 200px;
  width: 100%;
`;

export const BoxTime = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin: 5px;
`;

export const Hour = styled.TouchableOpacity`
  margin: 10px;
  background-color: #eae9ee;
  align-items: center;
  justify-content: center;
  width: 60px;
  border-radius: 20px;
`;
