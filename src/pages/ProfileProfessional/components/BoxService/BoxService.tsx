import {
  BoxImg,
  BoxServiceContainer,
  DescriptionService,
  NameService,
  SelectService,
  ValueService,
} from "./style";
import { TouchableOpacity } from "react-native";

interface Props {
  select: boolean;
  name: string;
  time: number;
  value: number;
  onSelect: any;
}

const BoxService = ({ select, name, value, time, onSelect }: Props) => {
  return (
    <BoxServiceContainer>
      <DescriptionService>
        <NameService>{name} </NameService>
        <ValueService>R$ {value.toFixed(2)} </ValueService>
        <ValueService> {time} mnts </ValueService>
        <TouchableOpacity
          onPress={() => onSelect({ name, price: value, time })}
        >
          <SelectService $select={select} />
        </TouchableOpacity>
      </DescriptionService>
    </BoxServiceContainer>
  );
};

export default BoxService;
