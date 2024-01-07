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
  justify-content: center;
  align-items: center;
  width: 90%;
`;
export const BoxDayFind = styled.TouchableOpacity<{ $select?: boolean }>`
  background-color: ${(props) => (props.$select ? "#9ff8cc" : "#ffffff")};
  margin: 0px 10px;
  padding: 8px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const HoursDisponibility = styled.View`
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 100%;
`;

export const BoxTime = styled.View`
  flex-direction: row;
  text-align: center;
  flex-wrap: wrap;
  margin: 5px;
`;

export const Hour = styled.TouchableOpacity<{
  $disponibility?: boolean;
  $select?: boolean;
}>`
  margin: 10px;
  background-color: ${(props) =>
    props.$disponibility ? "#eae9ee" : "#fc4273"};
  align-items: center;
  justify-content: center;
  width: 60px;
  border-radius: 20px;
`;
