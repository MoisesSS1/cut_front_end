import { BoxIcon, Container, DescIcon } from "./styled";
import Icon from "react-native-vector-icons/FontAwesome";
import IconFeather from "react-native-vector-icons/Feather";
import IconEvilIcons from "react-native-vector-icons/EvilIcons";

const Navbar = ({ navigation }: any) => {
  return (
    <Container>
      <BoxIcon onPress={() => navigation.navigate("Home")}>
        <Icon name="home" size={20} />
        <DescIcon>Home</DescIcon>
      </BoxIcon>

      <BoxIcon onPress={() => navigation.navigate("Agenda")}>
        <Icon name="reorder" size={20} />
        <DescIcon>Agenda</DescIcon>
      </BoxIcon>

      <BoxIcon onPress={() => navigation.navigate("Help")}>
        <IconFeather name="help-circle" size={20} />
        <DescIcon>Ajuda</DescIcon>
      </BoxIcon>

      <BoxIcon onPress={() => navigation.navigate("Profile")}>
        <IconEvilIcons name="user" size={30} />
        <DescIcon>Perfil</DescIcon>
      </BoxIcon>
    </Container>
  );
};

export default Navbar;
