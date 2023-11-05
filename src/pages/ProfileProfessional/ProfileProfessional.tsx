import React from "react";
import { Container, ContainerImgPlace, ImgPlace, Services } from "./styles";
import { ScrollView } from "react-native";
import BoxService from "./components/BoxService/BoxService";
import Schedule from "./components/Schedule/Schedule";
import Total from "./components/Total/Total";

const ProfileProfessional = () => {
  return (
    <Container>
      <ContainerImgPlace>
        <ImgPlace
          source={{
            uri: "https://i.pinimg.com/736x/db/da/61/dbda611adb4cf6d68f82e24e1ce0446c.jpg",
          }}
        />
      </ContainerImgPlace>

      <Services>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <BoxService nameService="Barba e corte" valueService={20.5} />
          <BoxService nameService="Corte de cabelo" valueService={20.0} />
          <BoxService nameService="Corte de cabelo" valueService={20.0} />
          <BoxService nameService="Sombrancelha" valueService={10.0} />
          <BoxService nameService="Corte de cabelo" valueService={20.0} />
        </ScrollView>
      </Services>

      <Schedule />

      <Total />
    </Container>
  );
};

export default ProfileProfessional;
