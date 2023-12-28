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
  hourInit: any;
}

const Total = ({ total, hourInit }: Props) => {
  return (
    <ContainerPayment>
      <BoxInfo>
        <ValueTotal>R$ {total.toFixed(2)} </ValueTotal>

        <ValueTotal style={{ fontSize: 16, marginTop: 6 }}>
          Inicio: {hourInit}
        </ValueTotal>
      </BoxInfo>

      <ButtonFinishOrde>
        <TextButton>Agendar</TextButton>
      </ButtonFinishOrde>
    </ContainerPayment>
  );
};

export default Total;
