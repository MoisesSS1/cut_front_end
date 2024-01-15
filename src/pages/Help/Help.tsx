import React from "react";
import { Container, Content, Text } from "./styled";
import Navbar from "../../layout/Navbar/Navbar";

const Help = ({ navigation }: any) => {
  return (
    <Container>
      <Content>
        <Text>Envie uma mensagem no número</Text>
        <Text>11 944594240</Text>
      </Content>
      <Navbar navigation={navigation} />
    </Container>
  );
};

export default Help;
