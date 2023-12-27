import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Balon, Content, ImgTriangle, ImgUser } from "./styles";
import api from "../../services/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Map = ({ navigation, coordenates }: any) => {
  const location = coordenates;

  const [data, setData] = useState<any>("");

  useEffect(() => {
    if (
      coordenates != null &&
      coordenates[0] != -23.5489 &&
      coordenates[1] != -46.6388
    ) {
      findUsers(location);
    }
  }, [location]);

  async function findUsers(location: Array<Number>) {
    const token = await AsyncStorage.getItem("token");

    await api
      .post(
        "/professional/findall",
        {
          lat: coordenates[0],
          lon: coordenates[1],
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((res) => {
        setData(res.data.findProfessionals);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  return (
    <>
      {location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location[0],
            longitude: location[1],
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {data &&
            data.map((professional: any) => {
              return (
                <Marker
                  onPress={() =>
                    navigation.navigate("ProfileProfessional", {
                      id: professional.id,
                    })
                  }
                  key={professional.id}
                  coordinate={{
                    latitude: professional.location.coordinates[0],
                    longitude: professional.location.coordinates[1],
                  }}
                  title="Moises"
                >
                  <Content>
                    <Balon>
                      <ImgUser
                        source={
                          professional.imgProfile
                            ? {
                                uri: `${professional.imgProfile}`,
                              }
                            : {
                                uri: `https://cdn.icon-icons.com/icons2/510/PNG/512/person_icon-icons.com_50075.png`,
                              }
                        }
                      />
                    </Balon>

                    <ImgTriangle
                      source={require("../../../assets/blackTriangulo.png")}
                    />
                  </Content>
                </Marker>
              );
            })}
        </MapView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
export default Map;
