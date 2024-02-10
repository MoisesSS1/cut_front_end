import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Platform, KeyboardAvoidingView } from "react-native";
import { Container, ContainerInputs, Input, Text } from "./styled";
import Buttom from "../../components/Buttom/Buttom";
import { useContext, useState } from "react";
import api from "../../services/axios";
import Message from "../../components/Message/Message";
import RadioButton from "../../components/RadioButton/RadioButton";
import { AuthContext } from "../../contexts/Auth";

const CreateAccount = ({ navigation }: any) => {
  const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 0;

  const [data, setData] = useState<Array<object>>([
    { value: "MASCULINO" },
    { value: "FEMININO" },
  ]);
  const [option, setOption] = useState<any>("MASCULINO");

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cellPhone, setCellPhone] = useState<string>("");

  const [message, setMessage] = useState();
  const [type, setType] = useState("");

  const auth = useContext(AuthContext);

  async function handleSubmit() {
    var typeService = "MASCULINO";

    if (option == "MASCULINO") {
      typeService = "MASCULINO";
    } else if (option == "FEMININO") {
      typeService = "FEMININO";
    }

    const createAcount = await api
      .post("/client/createaccount", {
        name,
        email,
        password,
        phone: cellPhone,
        typeService,
      })
      .then(async (res: any) => {
        const tokenset = await AsyncStorage.setItem(
          "token",
          res.data.createUser.token,
        );

        auth.signIn(res.data.createUser.token);

        navigation.navigate("Home");
      })
      .catch((err) => {
        setMessage(err.response.data.message);
        setType("error");
      });
  }

  return (
    <>
      {message ? (
        <Message message={message} setMessage={setMessage} type={type} />
      ) : (
        <Container
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <KeyboardAvoidingView behavior="height">
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
                autoCapitalize="none"
              />
              <Input
                value={password}
                placeholder="senha"
                style={{ textAlign: "center" }}
                secureTextEntry
                onChangeText={(value) => setPassword(value)}
                autoCapitalize="none"
              />

              <Input
                placeholder="11999999999"
                value={cellPhone}
                style={{ textAlign: "center" }}
                keyboardType="phone-pad"
                onChangeText={(value) => setCellPhone(value)}
              />
            </ContainerInputs>
            <View
              style={{
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <Text>Tipo de serviço:</Text>
              <RadioButton
                data={data}
                onSelect={(value: string) => setOption(value)}
              />
              <Buttom text="CRIAR" onPress={() => handleSubmit()} />
            </View>
          </KeyboardAvoidingView>
        </Container>
      )}
    </>
  );
};

export default CreateAccount;
