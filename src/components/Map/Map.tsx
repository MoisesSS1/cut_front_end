import React from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Balon, Content, ImgTriangle, ImgUser } from "./styles";

const Map = ({ navigation }: any) => {
  return (
    <>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -23.4878,
          longitude: -46.8884,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          onPress={() => navigation.navigate("ProfileProfessional")}
          key={1}
          coordinate={{
            latitude: -23.4874944,
            longitude: -46.8901034,
          }}
          title="Moises"
        >
          <Content>
            <Balon>
              <ImgUser
                source={{
                  uri: "https://instagram.fcgh15-1.fna.fbcdn.net/v/t51.2885-19/379175216_6604260119656104_7749900313999218754_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fcgh15-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=dPYWpmS-KP4AX8GW5EI&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDB7UCIEcT899eNoUzIxOPTpO3RKPhwFrsp_KMUfDAkZw&oe=6545D75E&_nc_sid=8b3546",
                }}
              />
            </Balon>

            <ImgTriangle
              source={require("../../../assets/blackTriangulo.png")}
            />
          </Content>
        </Marker>

        <Marker
          onPress={() => navigation.navigate("ProfileProfessional")}
          key={2}
          coordinate={{
            latitude: -23.4878,
            longitude: -46.8884,
          }}
          title="João Biruta"
        >
          <Content>
            <Balon>
              <ImgUser
                source={{
                  uri: "https://scontent.fcgh39-1.fna.fbcdn.net/v/t39.30808-6/366719272_3509012456051115_9144620582103558004_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ig80tX6xCF8AX8aKvjT&_nc_ht=scontent.fcgh39-1.fna&oh=00_AfAJuxzDt4ywL4fNcvqj00sZ_90vBQK062szZRteq0VDWA&oe=6544F75F",
                }}
              />
            </Balon>

            <ImgTriangle
              source={require("../../../assets/blackTriangulo.png")}
            />
          </Content>
        </Marker>

        <Marker
          onPress={() => navigation.navigate("ProfileProfessional")}
          key={5}
          coordinate={{
            latitude: -23.491484361324922,
            longitude: -46.88868679755403,
          }}
          title="Barbearia do Vini"
        >
          <Content>
            <Balon>
              <ImgUser
                source={{
                  uri: "data:image/jpeg;base64,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",
                }}
              />
            </Balon>

            <ImgTriangle
              source={require("../../../assets/blackTriangulo.png")}
            />
          </Content>
        </Marker>
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
export default Map;
