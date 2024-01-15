import { useState } from "react";
import Map from "../../components/Map/Map";
import Navbar from "../../layout/Navbar/Navbar";
import { BoxAdress, Container, Content } from "./styles";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const Home = ({ navigation }: any) => {
  const [coordenates, setCoordenates] = useState<any>([-23.5489, -46.6388]);

  return (
    <Container>
      <BoxAdress>
        <GooglePlacesAutocomplete
          placeholder="Digite seu endereço"
          fetchDetails={true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true

            setCoordenates(null);
            setCoordenates([
              details?.geometry.location.lat,
              details?.geometry.location.lng,
            ]);
          }}
          query={{
            key: process.env.EXPO_PUBLIC_KEY_API_GOOGLE_MAPS,
            language: "pt-br",
          }}
        />
      </BoxAdress>

      <Content>
        <Map navigation={navigation} coordenates={coordenates} />
      </Content>
      <Navbar navigation={navigation}></Navbar>
    </Container>
  );
};

export default Home;
