<<<<<<< HEAD
import global from "../../global/global";
import Navbar from "../../layout/Navbar/Navbar";
import { BoxAdress, Container, Content, TextAdress } from "./styles";

import Icon from "react-native-vector-icons/Entypo";
=======
import Navbar from "../../layout/Navbar/Navbar";
import { BoxAdress, Container, Content } from "./styles";
>>>>>>> 8369642cdb5d159d5165cfb62f14193459297996

const Home = () => {
  return (
    <Container>
<<<<<<< HEAD
      <BoxAdress>
        <Icon name="location-pin" size={30} color={global.theme.colors.black} />
        <TextAdress placeholder="Buscar profissional"></TextAdress>
      </BoxAdress>

      <Content></Content>

=======
      <BoxAdress></BoxAdress>
      <Content></Content>
>>>>>>> 8369642cdb5d159d5165cfb62f14193459297996
      <Navbar></Navbar>
    </Container>
  );
};

export default Home;
