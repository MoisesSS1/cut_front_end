import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import api from "../../services/axios";

import { Body, Container, Filter, OptionsFilter, TextOption } from "./styles";

import Navbar from "../../layout/Navbar/Navbar";
import Finalizados from "./Finalizados/Finalizados";
import Agendados from "./Agendados/Agendados";
import Cancelados from "./Cancelados/Cancelados";

const Agenda = ({ navigation }: any) => {
  const [view, setView] = useState("agendados");
  const [dataAgendados, setDataAgendados] = useState<Array<Props>>([]);
  const [dataCancelados, setDataCancelados] = useState<any>([]);
  const [dataFinalizados, setDataFinalizados] = useState<any>([]);

  interface Props {
    id: string;
    id_professional: string;
    id_client: string;
    services: [any];
    date: string;
    initService: string;
    end: string;
    status_payment: string;
  }

  useEffect(() => {
    async function getInfo() {
      const token = await AsyncStorage.getItem("token");

      api
        .get("/scheduling/user/showmyschedule", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          res.data.map((agendamento: any) => {
            if (agendamento.status_service === "waiting") {
              setDataAgendados((prevList: any) => [...prevList, agendamento]);
            } else if (agendamento.status_service === "concluded") {
              setDataFinalizados((prevList: any) => [...prevList, agendamento]);
            } else {
              setDataCancelados((prevList: any) => [...prevList, agendamento]);
            }
          });
        })
        .catch((err: any) => {
          console.log(err);
          Alert.alert(err.response.data.message);
        });
    }

    getInfo();
  }, []);

  function refresh() {
    navigation.navigate("Home");
  }

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

      <Body
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {view === "finalizados" && <Finalizados data={dataFinalizados} />}
        {view === "agendados" && (
          <Agendados data={dataAgendados} refresh={refresh} />
        )}
        {view === "cancelados" && <Cancelados data={dataCancelados} />}
      </Body>

      <Navbar navigation={navigation} />
    </Container>
  );
};

export default Agenda;
