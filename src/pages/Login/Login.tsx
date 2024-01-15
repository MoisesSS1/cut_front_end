import AsyncStorage from "@react-native-async-storage/async-storage";

import { useContext, useState } from "react";
import Buttom from "../../components/Buttom/Buttom";
import { Container, ContainerInputs, Input } from "./styled";
import api from "../../services/axios";
import Message from "../../components/Message/Message";
import { AuthContext } from "../../contexts/Auth";

const Login = ({ navigation }: any) => {
  const [message, setMessage] = useState<string | boolean>("");
  const [type, setType] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = useContext(AuthContext);

  async function handleSubmit() {
    api
      .post("/client/login", {
        email,
        password,
      })
      .then(async (res) => {
        const token = await AsyncStorage.setItem("token", res.data.token);

        auth.signIn(res.data.token);

        navigation.navigate("Home");
      })
      .catch((err) => {
        setType("error");
        setMessage(err.response.data.message);
      });
  }

  return (
    <>
      {message ? (
        <Message setMessage={setMessage} message={message} type={type} />
      ) : (
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
          <Buttom
            text="CRIAR CONTA"
            onPress={() => navigation.navigate("CreateAccount")}
          />
        </Container>
      )}
    </>
  );
};

export default Login;
