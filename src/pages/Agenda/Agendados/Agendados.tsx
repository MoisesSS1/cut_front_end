import { Alert } from "react-native";
import { Container } from "./styles";
import { Text } from "react-native";
import { IStatusServiceProps } from "../IStatusServiceProps";
import ItemSchedule from "../ItemSchedule/ItemSchedule";
import api from "../../../services/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Agendados = ({ data, refresh }: any) => {
  async function cancelService(item: IStatusServiceProps) {
    const token = await AsyncStorage.getItem("token");
    api
      .post(
        "/scheduling/canceled",
        {
          id_Agendamento: item.id,
          date: item.date,
          id_professional: item.id_professional,
          indexInit: item.indexInit,
          qtd_blocos_timer: item.qtd_blocos_timer,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((res) => {
        Alert.alert("Serviço cancelado");
        refresh();
      })
      .catch((err: any) => {
        Alert.alert(err.response.data.message);
      });
  }

  return (
    <Container>
      {!data[0] && <Text>Ainda não possui serviços agendados</Text>}
      {data[0] &&
        data.map((item: IStatusServiceProps) => {
          return (
            <ItemSchedule
              key={item.id}
              {...item}
              agendado={true}
              cancelService={cancelService}
            />
          );
        })}
    </Container>
  );
};

export default Agendados;
