import React from "react";
import { TouchableOpacity } from "react-native";
import { ContainOptions, Option } from "./styled";

interface Props {
  text: string;
  onPress: any;
  color?: string;
}

const Buttom = ({ ...props }: Props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <ContainOptions $color={props.color}>
        <Option> {props.text} </Option>
      </ContainOptions>
    </TouchableOpacity>
  );
};

export default Buttom;
