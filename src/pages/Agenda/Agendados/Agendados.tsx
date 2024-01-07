import React from "react";
import { Container } from "./styles";
import { Text } from "react-native";
import { IStatusServiceProps } from "../IStatusServiceProps";
import ItemSchedule from "../ItemSchedule/ItemSchedule";
import api from "../../../services/axios";

const Agendados = ({ data }: IStatusServiceProps[] | any) => {
  async function cancelService(item: IStatusServiceProps) {
    api
      .post("")
      .then((res) => {
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  return (
    <Container>
      {!data[0] && <Text>Ainda nao possui serviço agendado</Text>}
      {data[0] &&
        data.map((item: IStatusServiceProps) => {
          return (
            <ItemSchedule
              key={item.id}
              {...item}
              agendado={true}
              cancelService={cancelService}
            />
          );
        })}
    </Container>
  );
};

export default Agendados;
