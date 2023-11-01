import styled from "styled-components/native";
import global from "../../global/global";

export const Container = styled.View`
  flex: 1;
`;

export const Filter = styled.View`
  height: 15%;
  margin: 10px 0px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const OptionsFilter = styled.View<{ $active?: boolean }>`
  align-items: center;
  justify-content: center;
  text-align: center;
  border-bottom-color: ${(props) =>
    props.$active ? global.theme.colors.red : global.theme.colors.white};
  border-bottom-width: 3px;
`;

export const OptionsFilterButton = styled.Button``;

export const Body = styled.View`
  background-color: #ebebeb;
  height: 69%;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
