import { Text, ScrollView } from "react-native";
import {
  BoxDays,
  BoxTime,
  ContainerSchedule,
  Hour,
  HoursDisponibility,
  InforDays,
} from "./style";

const Schedule = () => {
  return (
    <ContainerSchedule>
      <InforDays>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <BoxDays>
            <Text>D</Text>
            <Text>1/11</Text>
          </BoxDays>

          <BoxDays>
            <Text>S</Text>
            <Text>2/11</Text>
          </BoxDays>

          <BoxDays>
            <Text>T</Text>
            <Text>3/11</Text>
          </BoxDays>

          <BoxDays>
            <Text>Q</Text>
            <Text>4/11</Text>
          </BoxDays>
          <BoxDays>
            <Text>Q</Text>
            <Text>5/11</Text>
          </BoxDays>
          <BoxDays>
            <Text>S</Text>
            <Text>6/11</Text>
          </BoxDays>

          <BoxDays>
            <Text>S</Text>
            <Text>7/11</Text>
          </BoxDays>
        </ScrollView>
      </InforDays>

      <HoursDisponibility>
        <ScrollView showsVerticalScrollIndicator={false}>
          <BoxTime>
            <Hour>
              <Text>08:00</Text>
            </Hour>
            <Hour>
              <Text>08:30</Text>
            </Hour>
            <Hour>
              <Text>09:00</Text>
            </Hour>
            <Hour>
              <Text>09:30</Text>
            </Hour>
            <Hour>
              <Text>10:00</Text>
            </Hour>
            <Hour>
              <Text>10:30</Text>
            </Hour>
            <Hour>
              <Text>11:00</Text>
            </Hour>
            <Hour>
              <Text>11:30</Text>
            </Hour>
            <Hour>
              <Text>12:00</Text>
            </Hour>
            <Hour>
              <Text>12:30</Text>
            </Hour>
            <Hour>
              <Text>13:00</Text>
            </Hour>
            <Hour>
              <Text>13:30</Text>
            </Hour>
            <Hour>
              <Text>14:00</Text>
            </Hour>
            <Hour>
              <Text>14:30</Text>
            </Hour>
            <Hour>
              <Text>15:00</Text>
            </Hour>
            <Hour>
              <Text>15:30</Text>
            </Hour>
            <Hour>
              <Text>16:00</Text>
            </Hour>
            <Hour>
              <Text>16:30</Text>
            </Hour>
            <Hour>
              <Text>17:00</Text>
            </Hour>
            <Hour>
              <Text>17:30</Text>
            </Hour>
            <Hour>
              <Text>18:00</Text>
            </Hour>
            <Hour>
              <Text>18:30</Text>
            </Hour>
            <Hour>
              <Text>19:00</Text>
            </Hour>
            <Hour>
              <Text>19:30</Text>
            </Hour>
            <Hour>
              <Text>20:00</Text>
            </Hour>
            <Hour>
              <Text>20:30</Text>
            </Hour>
            <Hour>
              <Text>21:00</Text>
            </Hour>
            <Hour>
              <Text>21:30</Text>
            </Hour>
          </BoxTime>
        </ScrollView>
      </HoursDisponibility>
    </ContainerSchedule>
  );
};

export default Schedule;
