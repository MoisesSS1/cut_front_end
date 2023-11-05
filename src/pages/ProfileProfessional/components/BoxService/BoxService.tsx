import React from "react";
import {
  BoxImg,
  BoxServiceContainer,
  DescriptionService,
  IconService,
  NameService,
  SelectService,
  ValueService,
} from "./style";
import { Image } from "react-native";

interface Props {
  nameService: string;
  valueService: number;
}

const BoxService = ({ nameService, valueService }: Props) => {
  return (
    <BoxServiceContainer>
      <BoxImg>
        <IconService>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/5499/5499868.png",
            }}
            width={50}
            height={50}
          />
        </IconService>
        <NameService>{nameService} </NameService>
      </BoxImg>

      <DescriptionService>
        <ValueService>R$ {valueService.toFixed(2)} </ValueService>
        <SelectService></SelectService>
      </DescriptionService>
    </BoxServiceContainer>
  );
};

export default BoxService;
