import React, { useEffect, useState } from "react";
import { Body, Container, Filter, OptionsFilter, TextOption } from "./styles";
import Navbar from "../../layout/Navbar/Navbar";
import Finalizados from "./Finalizados/Finalizados";
import Agendados from "./Agendados/Agendados";
import Cancelados from "./Cancelados/Cancelados";
import api from "../../services/axios";

const Agenda = ({ navigation }: any) => {
  const [view, setView] = useState("finalizados");

  useEffect(() => {
    api.post("/");
  }, []);

  return (
    <Container>
      <Filter>
        <OptionsFilter
          $active={view === "agendados"}
          onPress={() => setView("agendados")}
        >
          <TextOption>Agendados</TextOption>
        </OptionsFilter>

        <OptionsFilter
          $active={view === "finalizados"}
          onPress={() => setView("finalizados")}
        >
          <TextOption>Finalizados</TextOption>
        </OptionsFilter>

        <OptionsFilter
          $active={view === "cancelados"}
          onPress={() => setView("cancelados")}
        >
          <TextOption>Cancelados</TextOption>
        </OptionsFilter>
      </Filter>

      <Body>
        {view === "finalizados" && <Finalizados />}
        {view === "agendados" && <Agendados />}
        {view === "cancelados" && <Cancelados />}
      </Body>

      <Navbar navigation={navigation} />
    </Container>
  );
};

export default Agenda;
