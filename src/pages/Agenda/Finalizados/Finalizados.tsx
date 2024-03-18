import React from "react";
import { Container } from "./styles";
import { Text } from "react-native";
import { IStatusServiceProps } from "../IStatusServiceProps";
import ItemSchedule from "../ItemSchedule/ItemSchedule";

const Finalizados = ({ data }: IStatusServiceProps[] | any) => {
  return (
    <Container>
      {!data[0] && <Text>Ainda não possui serviços finalizados</Text>}
      {data[0] &&
        data.map((item: any) => {
          return <ItemSchedule key={item.id} {...item} />;
        })}
    </Container>
  );
};

export default Finalizados;
