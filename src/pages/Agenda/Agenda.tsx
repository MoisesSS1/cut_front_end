import React from "react";
import { Platform } from "react-native";
import {
  Body,
  Container,
  Filter,
  OptionsFilter,
  OptionsFilterButton,
} from "./styles";
import Navbar from "../../layout/Navbar/Navbar";
import { Text } from "react-native";

import { SafeAreaView as SafeAreaViewAndroid } from "react-native-safe-area-context";
import { SafeAreaView as SafeAreaViewIos } from "react-native";

const Agenda = ({ navigation }: any) => {
  return (
    <>
      {Platform.OS === "ios" && (
        <SafeAreaViewIos style={{ flex: 1, backgroundColor: "#ffffff" }}>
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

            <Navbar navigation={navigation} />
          </Container>
        </SafeAreaViewIos>
      )}

      {Platform.OS === "android" && (
        <SafeAreaViewAndroid style={{ flex: 1, backgroundColor: "#ffffff" }}>
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

            <Navbar navigation={navigation} />
          </Container>
        </SafeAreaViewAndroid>
      )}
    </>
  );
};

export default Agenda;
