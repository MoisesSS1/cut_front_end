import styled from "styled-components/native";

export const ContainerSchedule = styled.View`
  background-color: #ffffff;
  height: 35%;
  margin-bottom: 30px;
`;

export const InforDays = styled.View`
  height: 60px;
  margin: 10px 20px 20px 0px;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
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
  width: 100%;
`;

export const BoxTime = styled.View`
  flex-direction: row;
  text-align: center;
  flex-wrap: wrap;
  margin: 5px;
  padding-bottom: 30px;
  background-color: #ffffff;
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
