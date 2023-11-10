import { Platform } from "react-native";
import Map from "../../components/Map/Map";
import global from "../../global/global";
import Navbar from "../../layout/Navbar/Navbar";
import { BoxAdress, Container, Content, TextAdress } from "./styles";

import { SafeAreaView as SafeAreaViewAndroid } from "react-native-safe-area-context";
import { SafeAreaView as SafeAreaViewIos } from "react-native";

import Icon from "react-native-vector-icons/Entypo";

const Home = ({ navigation }: any) => {
  return (
    <>
      {Platform.OS === "ios" && (
        <SafeAreaViewIos style={{ flex: 1, backgroundColor: "#ffffff" }}>
          <Container>
            <BoxAdress>
              <Icon
                name="location-pin"
                size={30}
                color={global.theme.colors.black}
              />
              <TextAdress placeholder="Buscar profissionais proximos"></TextAdress>
            </BoxAdress>

            <Content>
              <Map navigation={navigation} />
            </Content>
            <Navbar navigation={navigation}></Navbar>
          </Container>
        </SafeAreaViewIos>
      )}

      {Platform.OS === "android" && (
        <SafeAreaViewAndroid style={{ flex: 1, backgroundColor: "#ffffff" }}>
          <Container>
            <BoxAdress>
              <Icon
                name="location-pin"
                size={30}
                color={global.theme.colors.black}
              />
              <TextAdress placeholder="Buscar profissionais proximos"></TextAdress>
            </BoxAdress>

            <Content>
              <Map navigation={navigation} />
            </Content>
            <Navbar navigation={navigation}></Navbar>
          </Container>
        </SafeAreaViewAndroid>
      )}
    </>
  );
};

export default Home;
