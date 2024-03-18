import React from "react";
import { Container } from "./styles";
import { Text } from "react-native";
import ItemSchedule from "../ItemSchedule/ItemSchedule";

interface IStatusServiceProps {
  id: string;
  id_professional: string;
  id_client: string;
  services: [any];
  date: string;
  initService: string;
  end: string;
  status_payment: string;
}

const Cancelados = ({ data }: IStatusServiceProps[] | any) => {
  return (
    <Container>
      {!data[0] && <Text>Ainda não possui serviços cancelados</Text>}
      {data[0] &&
        data.map((item: any) => {
          return <ItemSchedule key={item.id} {...item} />;
        })}
    </Container>
  );
};

export default Cancelados;
