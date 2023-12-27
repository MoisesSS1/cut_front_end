import React, { useEffect, useState } from "react";
import {
  BoxInfo,
  ButtonFinishOrde,
  ContainerPayment,
  TextButton,
  ValueTotal,
} from "./style";

interface Props {
  total: number;
}

const Total = ({ total }: Props) => {
  return (
    <ContainerPayment>
      <BoxInfo>
        <ValueTotal>R$ {total.toFixed(2)} </ValueTotal>
      </BoxInfo>

      <ButtonFinishOrde>
        <TextButton>Agendar</TextButton>
      </ButtonFinishOrde>
    </ContainerPayment>
  );
};

export default Total;
