import { Container, ContainerInputs, Input, Text } from "./styled";
import Buttom from "../../components/Buttom/Buttom";
import { useState } from "react";
import api from "../../services/axios";
import Message from "../../components/Message/Message";
import RadioButton from "../../components/RadioButton/RadioButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CreateAccount = ({ navigation }: any) => {
  const [data, setData] = useState<Array<object>>([
    { value: "MASC" },
    { value: "AMBOS" },
    { value: "FEM" },
  ]);
  const [option, setOption] = useState<any>("AMBOS");

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cellPhone, setCellPhone] = useState<string>("");
  const [cep, setCep] = useState<string>("");
  const [number, setNumber] = useState<string>("");

  const [message, setMessage] = useState();
  const [type, setType] = useState("");

  async function handleSubmit() {
    var typeService = "MASCULINO";

    if (option == "AMBOS") {
      typeService = "AMBOS";
    } else if (option == "FEM") {
      typeService = "FEMININO";
    }

    const address = {
      cep,
      number,
    };

    const createAcount = await api
      .post("/professional/createaccount", {
        name,
        email,
        password,
        phone: cellPhone,
        address,
        types_service: typeService,
      })
      .then((res: any) => {
        setMessage(res.data.message);

        setType("success");

        setLogin(res.data.create.token);
      })
      .catch((err) => {
        setMessage(err.response.data.message);
        setType("error");
      });
  }

  async function setLogin(token: string) {
    const setToken = await AsyncStorage.setItem("token", token);
    setTimeout(() => {
      navigation.navigate("Main");
    }, 3000);
  }

  return (
    <>
      {message ? (
        <Message message={message} setMessage={setMessage} type={type} />
      ) : (
        <Container>
          <ContainerInputs>
            <Input
              value={name}
              placeholder="nome"
              style={{ textAlign: "center" }}
              onChangeText={(value) => setName(value)}
            />
            <Input
              value={email}
              placeholder="email@email.com"
              keyboardType="email-address"
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

            <Input
              placeholder="11999999999"
              value={cellPhone}
              style={{ textAlign: "center" }}
              keyboardType="phone-pad"
              onChangeText={(value) => setCellPhone(value)}
            />

            <Input
              placeholder="cep"
              value={cep}
              style={{ textAlign: "center" }}
              keyboardType="phone-pad"
              onChangeText={(value) => setCep(value)}
            />
            <Input
              placeholder="numero"
              value={number}
              style={{ textAlign: "center" }}
              keyboardType="default"
              onChangeText={(value) => setNumber(value)}
            />
            <Text>PUBLICO</Text>
            <RadioButton
              data={data}
              onSelect={(value: string) => setOption(value)}
            />
          </ContainerInputs>

          <Buttom text="CRIAR" onPress={() => handleSubmit()} />
        </Container>
      )}
    </>
  );
};

export default CreateAccount;
