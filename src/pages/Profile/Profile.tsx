import React, { useContext } from "react";
import { Container, Content, Text, BtnOption } from "./styled";
import Navbar from "../../layout/Navbar/Navbar";

import { AuthContext } from "../../contexts/Auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = ({ navigation }: any) => {
  const auth = useContext(AuthContext);

  async function signOut() {
    const token = await AsyncStorage.removeItem("token");
    auth.signOut();
  }

  return (
    <Container>
      <Content>
        <BtnOption onPress={() => signOut()}>
          <Text>Sair da conta</Text>
        </BtnOption>
      </Content>
      <Navbar navigation={navigation} />
    </Container>
  );
};

export default Profile;
