import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

import { useState } from "react";
import Buttom from "../../components/Buttom/Buttom";
import { Container, ContainerInputs, Input } from "./styled";
import api from "../../services/axios";

const Login = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit() {
    if (!email || !password) {
      Alert.alert("Preencha as informações corretamente");
    }

    api
      .post("/professional/login", {
        email,
        password,
      })
      .then(async (res) => {
        const token = await AsyncStorage.setItem("token", res.data.token);

        navigation.navigate("Main");
      })
      .catch((err) => {
        Alert.alert(err.response.data.message);
      });
  }

  return (
    <Container>
      <ContainerInputs>
        <Input
          value={email}
          placeholder="email"
          style={{ textAlign: "center" }}
          onChangeText={(value) => setEmail(value)}
        />

        <Input
          value={password}
          placeholder="senha"
          style={{ textAlign: "center" }}
          secureTextEntry
          onChangeText={(value) => setPassword(value)}
        />
      </ContainerInputs>

      <Buttom text="ENTRAR" onPress={() => handleSubmit()} />
    </Container>
  );
};

export default Login;
