import styled from "styled-components/native";
import global from "../../global/global";

export const Container = styled.View`
  background-color: #ffffff;
  flex: 1;
`;

export const TextOption = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;

export const Filter = styled.View`
  height: 15%;
  margin: 10px 0px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const OptionsFilter = styled.TouchableOpacity<{ $active?: boolean }>`
  align-items: center;
  justify-content: center;
  text-align: center;
  border-bottom-color: ${(props) =>
    props.$active ? global.theme.colors.red : global.theme.colors.white};
  border-bottom-width: 3px;
  padding: 20px 0px;
`;

export const Body = styled.ScrollView`
  background-color: #d15454;
  flex: 1;
  text-align: center;
`;
