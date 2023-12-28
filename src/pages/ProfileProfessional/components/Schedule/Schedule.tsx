import { Text, ScrollView } from "react-native";
import {
  BoxDayFind,
  BoxDays,
  BoxTime,
  ContainerSchedule,
  Hour,
  HoursDisponibility,
  InforDays,
} from "./style";
import { useEffect, useState } from "react";
import api from "../../../../services/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
  id: string;
  checkHourSelect: any;
  indexHourInit: any;
  setIndexHourInit: any;
}

const Schedule = ({
  id,
  checkHourSelect,
  indexHourInit,
  setIndexHourInit,
}: Props) => {
  const [dateSelect, setDateSelet] = useState();
  const [hours, setHours] = useState<any>(); //array de horas disponiveis
  //state para guardar datas dos proximos 15 dias
  const [datesFilter, setDatesFilter] = useState<Array<string>>([]);
  const [resApi, setResApi] = useState<string | boolean>(false);

  useEffect(() => {
    setDatesFilter([""]);
    GetNext15Days();
  }, []);

  useEffect(() => {
    findDisponibility(id);
  }, [dateSelect]);

  async function GetNext15Days() {
    let date = new Date();
    for (let i = 0; i < 14; i++) {
      const dateEdit = `${date.getDate()}-${
        date.getMonth() + 1
      }-${date.getFullYear()}`;

      let dates = datesFilter;

      dates.push(dateEdit);
      setDatesFilter(dates);
      date.setDate(date.getDate() + 1);
    }
  }
  async function findDisponibility(id: string) {
    const token = await AsyncStorage.getItem("token");

    await api
      .post(
        "/schedule/disponibilityprofessional",
        {
          id,
          date: dateSelect,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((res: any) => {
        if (!res.data.data) {
          setResApi("Nenhum horario disponivel");
        } else {
          setResApi(false);
          setHours(res.data.data.info);
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  return (
    <ContainerSchedule>
      <InforDays>
        <BoxDays>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={true}
            style={{
              width: "100%",
              padding: 10,
            }}
          >
            {datesFilter &&
              datesFilter.map((date: any, i: number) => {
                return (
                  <BoxDayFind
                    $select={date === dateSelect ? true : false}
                    key={i}
                    onPress={() => setDateSelet(date)}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                      }}
                    >
                      {date}
                    </Text>
                  </BoxDayFind>
                );
              })}
          </ScrollView>
        </BoxDays>
      </InforDays>

      <HoursDisponibility>
        {resApi ? (
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            {resApi}
          </Text>
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            <BoxTime>
              {hours &&
                !resApi &&
                hours.map((hour: any, index: number) => (
                  <>
                    {/* if serve para diferenciar o estilo no botao que for licado para o inicio do horario */}
                    {index === indexHourInit ? (
                      <Hour
                        style={{
                          backgroundColor:
                            index === indexHourInit ? "#20dfe6" : "none",
                        }}
                        disabled={!hour[Object.getOwnPropertyNames(hour)[0]]}
                        key={Object.getOwnPropertyNames(hour)[0]}
                        onPress={() =>
                          checkHourSelect(
                            Object.getOwnPropertyNames(hour)[0],
                            index,
                            hours,
                            setIndexHourInit(
                              index,
                              Object.getOwnPropertyNames(hour)[0],
                            ),
                          )
                        }
                      >
                        <Text>{Object.getOwnPropertyNames(hour)[0]}</Text>
                      </Hour>
                    ) : (
                      <Hour
                        $disponibility={
                          hour[Object.getOwnPropertyNames(hour)[0]]
                        }
                        disabled={!hour[Object.getOwnPropertyNames(hour)[0]]}
                        key={Object.getOwnPropertyNames(hour)[0]}
                        onPress={() =>
                          checkHourSelect(
                            Object.getOwnPropertyNames(hour)[0],
                            index,
                            hours,
                          )
                        }
                        onPressIn={() => setIndexHourInit(index)}
                      >
                        <Text>{Object.getOwnPropertyNames(hour)[0]}</Text>
                      </Hour>
                    )}
                  </>
                ))}
            </BoxTime>
          </ScrollView>
        )}
      </HoursDisponibility>
    </ContainerSchedule>
  );
};

export default Schedule;
