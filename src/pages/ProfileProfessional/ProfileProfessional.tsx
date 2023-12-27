import { useEffect, useState } from "react";
import { Container, ContainerImgPlace, ImgPlace, Services } from "./styles";
import { ScrollView } from "react-native";
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
  const [initService, setInitService] = useState();

  //atualiza as views
  const [includeView, setIncludeView] = useState(true);

  interface Iservice {
    name: string;
    price: number;
    time: number;
  }

  const token = useEffect(() => {
    findUser(id);
  }, []);

  useEffect(() => {
    calcTotal();
  }, [selectService]);

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
        console.log(err);
      });
  }

  async function includeService({ name, price, time }: Iservice) {
    setIncludeView(false);
    //busca se nome está incluido no array, se tiver tira, else adiciona
    if (namesServices.includes(name)) {
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

      <Schedule id={id} />

      <Total total={total} />
    </Container>
  );
};

export default ProfileProfessional;
