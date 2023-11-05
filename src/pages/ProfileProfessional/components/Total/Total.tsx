import React from "react";
import {
  BoxInfo,
  ButtonFinishOrde,
  ContainerPayment,
  DateAndHour,
  TextButton,
  ValueTotal,
} from "./style";

const Total = () => {
  return (
    <ContainerPayment>
      <BoxInfo>
        <ValueTotal>R$ 25,00</ValueTotal>
        <DateAndHour>11/12</DateAndHour>
      </BoxInfo>

      <ButtonFinishOrde>
        <TextButton>Agendar</TextButton>
      </ButtonFinishOrde>
    </ContainerPayment>
  );
};

export default Total;
