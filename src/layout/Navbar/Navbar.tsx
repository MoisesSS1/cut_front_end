import { BoxIcon, Container, DescIcon } from "./styled";
import Icon from "react-native-vector-icons/FontAwesome";
import IconFeather from "react-native-vector-icons/Feather";
import IconEvilIcons from "react-native-vector-icons/EvilIcons";

const Navbar = ({ navigation }: any) => {
  return (
    <Container>
      <BoxIcon>
        <Icon
          onPress={() => navigation.navigate("Home")}
          name="home"
          size={20}
        />
        <DescIcon onPress={() => navigation.navigate("Home")}>Home</DescIcon>
      </BoxIcon>

      <BoxIcon>
        <Icon
          onPress={() => navigation.navigate("Agenda")}
          name="reorder"
          size={20}
        />
        <DescIcon onPress={() => navigation.navigate("Agenda")}>
          Agenda
        </DescIcon>
      </BoxIcon>

      <BoxIcon>
        <IconFeather
          onPress={() => navigation.navigate("Help")}
          name="help-circle"
          size={20}
        />
        <DescIcon onPress={() => navigation.navigate("Help")}>Ajuda</DescIcon>
      </BoxIcon>

      <BoxIcon>
        <IconEvilIcons
          onPress={() => navigation.navigate("Help")}
          name="user"
          size={30}
        />
        <DescIcon onPress={() => navigation.navigate("Profile")}>
          Perfil
        </DescIcon>
      </BoxIcon>
    </Container>
  );
};

export default Navbar;
