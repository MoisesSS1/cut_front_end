import React from "react";
import {
  Body,
  Container,
  Filter,
  OptionsFilter,
  OptionsFilterButton,
} from "./styles";
import Navbar from "../../layout/Navbar/Navbar";
import { Text } from "react-native";

const Agenda = () => {
  return (
    <Container>
      <Filter>
        <OptionsFilter>
          <OptionsFilterButton color="#000000" title="Agendados" />
        </OptionsFilter>

        <OptionsFilter $active={true}>
          <OptionsFilterButton color="#000000" title="Finalizados" />
        </OptionsFilter>

        <OptionsFilter>
          <OptionsFilterButton color="#000000" title="Cancelados" />
        </OptionsFilter>
      </Filter>

      <Body>
        <Text>Incluir lista de pedidos</Text>
      </Body>

      <Navbar />
    </Container>
  );
};

export default Agenda;
