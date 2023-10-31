import global from "../../global/global";
import Navbar from "../../layout/Navbar/Navbar";
import { BoxAdress, Container, Content, TextAdress } from "./styles";

import Icon from "react-native-vector-icons/Entypo";

const Home = () => {
  return (
    <Container>
      <BoxAdress>
        <Icon name="location-pin" size={30} color={global.theme.colors.black} />
        <TextAdress placeholder="Buscar profissional"></TextAdress>
      </BoxAdress>

      <Content></Content>

      <Navbar></Navbar>
    </Container>
  );
};

export default Home;
