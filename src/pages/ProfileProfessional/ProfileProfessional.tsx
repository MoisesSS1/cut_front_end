import { useEffect, useState } from "react";
import { Container, ContainerImgPlace, ImgPlace, Services } from "./styles";
import { ScrollView, Alert } from "react-native";
import BoxService from "./components/BoxService/BoxService";
import Schedule from "./components/Schedule/Schedule";
import Total from "./components/Total/Total";
import api from "../../services/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileProfessional = ({ route, navigation }: any) => {
  const { id } = route.params;
  const [data, setData] = useState<any>({});
  const [total, setTotal] = useState<number>(0);
  const [selectService, setSelectService] = useState<Array<any>>([]); //inclui os serviços selecionados
  const [namesServices, setNamesServices] = useState<Array<string>>([]); //inclui somente o nome no array, para checar e disponibilizar se está checado
  const [dateSelect, setDateSelet] = useState();

  //info User
  const [userInfo, setUserInfo] = useState<any>(null);

  const [indexHourInit, setIndexHourInit] = useState<any>();
  const [hourInit, setHourInit] = useState("");
  const [hourEnd, setHourEnd] = useState("");
  const [blocsServices, setBlocsServices] = useState<number | undefined>();

  //atualiza as views
  const [includeView, setIncludeView] = useState(true);

  interface Iservice {
    name: string;
    price: number;
    time: number;
  }

  useEffect(() => {
    findUser(id);
    findInfoUser();
  }, []);

  useEffect(() => {
    //altera o horário para nulo quando mudar a data
    setIndexHourInit("");
    setHourEnd("");
    setHourInit("");
  }, [dateSelect]);

  useEffect(() => {
    calcTotal();
    setHourInit("");
  }, [selectService]);

  async function filterSelectHour(index: number, hourSelect: string) {
    setIndexHourInit(index);
    setHourInit(hourSelect);
  }

  async function findInfoUser() {
    const id = await AsyncStorage.getItem("id");
    const token = await AsyncStorage.getItem("token");

    await api
      .post(
        "/client/info",
        {
          id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((res) => {
        setUserInfo(res.data);
      })
      .catch((err: any) => {
        Alert.alert(err.response.data.message);
      });
  }

  async function findUser(id: string) {
    const token = await AsyncStorage.getItem("token");
    await api
      .post(
        "/professional/findone",
        { id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err: any) => {
        Alert.alert(err.response.data.message);
      });
  }

  async function includeService({ name, price, time }: Iservice) {
    setIncludeView(false);
    //busca se nome está incluido no array, se tiver tira, else adiciona
    if (namesServices.includes(name)) {
      setIncludeView(false);
      const nameS = namesServices;
      await nameS.splice(nameS.indexOf(name), 1);
      setNamesServices(nameS); //remove o nome do array

      selectService.map((service, index) => {
        if (service.name == name) {
          let services = selectService;
          services.splice(index, 1);

          setSelectService(services); //remove o serviço do array
        }
      });
      setIncludeView(true);
      calcTotal();
    } else {
      const service = {
        name,
        price,
        time,
      };
      setSelectService([...selectService, service]);
      setNamesServices([...namesServices, name]);
      setIndexHourInit("");
      setIncludeView(true);
    }
  }

  async function calcTotal() {
    const calc = await selectService.reduce(
      (a: number, service: any) => a + Number(service.price),
      0,
    );

    setTotal(calc);
  }

  async function checkHourSelect(init: string, index: number, hours: any) {
    let a = true;
    //pegar indice do horario e checar as proximos blocos se estão disponiveis
    //caso não esteja disponivel retornar erro ao usuário
    let blocs = 0;
    const qtdBlocs15mnts: any = await selectService.map((service: any) => {
      const add = service.time / 15;
      blocs += add;
    }); //define quantos blocos tem nos serviços selecionados

    //inclui o horario de finalizaça do serviço
    setHourEnd(Object.keys(hours[blocs + index])[0]);
    setBlocsServices(blocs);
    setIndexHourInit(index);

    //caso tenha algum valor false na agenda, soma index e blocs
    for (let c = index; c < blocs + index; c++) {
      if (hours[c][Object.keys(hours[c])[0]] !== true) {
        a = false;
        Alert.alert("Não é possivel iniciar nesse horário!");
        setIndexHourInit("");
        setHourEnd("");
        setHourInit("");
        setBlocsServices(undefined);
        setIndexHourInit(undefined);
        return;
      }
    }
  }

  async function subimitScheduling() {
    if (!selectService[0]) {
      return Alert.alert("Necessário incluir serviço");
    }

    if (!hourInit) {
      return Alert.alert("Necessário incluir horário de inicio");
    }

    if (!dateSelect) {
      return Alert.alert("Selecione uma data");
    }

    const token = await AsyncStorage.getItem("token");

    const saveData = await api
      .post(
        "/scheduling/create",
        {
          id_professional: id,
          services: selectService,
          initService: hourInit,
          end: hourEnd,
          status_payment: "pending",
          status_service: "waiting",
          date: dateSelect,
          qtd_blocos_timer: `${blocsServices}`,
          indexInit: indexHourInit,
          user_number: userInfo.phone,
          user_name: userInfo.name,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((res: any) => {
        Alert.alert("Agendamento realizado com sucesso!");
        navigation.navigate("Agenda");
      })
      .catch((err) => {
        Alert.alert(err.response.data.message);
      });
  }

  return (
    <Container>
      <ContainerImgPlace>
        <ImgPlace
          source={
            data.imgLocal
              ? { uri: `${data.imgLocal}` }
              : {
                  uri: `https://cdn.icon-icons.com/icons2/510/PNG/512/person_icon-icons.com_50075.png`,
                }
          }
        />
      </ContainerImgPlace>

      <Services>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
          }}
        >
          {data.services &&
            includeView &&
            data.services.map((service: any) => {
              return (
                <BoxService
                  select={namesServices.includes(service.name) ? true : false}
                  key={service.name}
                  name={service.name}
                  value={service.price}
                  time={service.time}
                  onSelect={includeService}
                />
              );
            })}
        </ScrollView>
      </Services>

      <Schedule
        dateSelect={dateSelect}
        setDateSelet={setDateSelet}
        indexHourInit={indexHourInit}
        setIndexHourInit={filterSelectHour}
        checkHourSelect={checkHourSelect}
        id={id}
      />

      <Total
        validadeDataForSaveDB={subimitScheduling}
        total={total}
        hourInit={hourInit}
      />
    </Container>
  );
};

export default ProfileProfessional;
