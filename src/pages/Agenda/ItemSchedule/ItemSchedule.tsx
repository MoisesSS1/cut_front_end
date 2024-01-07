import { IStatusServiceProps } from "../IStatusServiceProps";
import { View } from "react-native";
import { BoxCancel, Container, Text, TextTitle } from "./styles";
import { useEffect, useState } from "react";

const ItemSchedule = ({ ...item }: IStatusServiceProps) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let total = 0;
    const value1 = item.services.map((value1) => {
      total = total + value1.price;
    });

    setValue(total);
  }, []);

  return (
    <Container>
      <View
        style={{
          backgroundColor: "#b8fccc",
          height: 30,
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          paddingLeft: 30,
          paddingRight: 30,
        }}
      >
        <TextTitle>{item.date}</TextTitle>
        <TextTitle>às</TextTitle>
        <TextTitle>{item.initService} </TextTitle>
      </View>
      <Text>R$: {value.toFixed(2)}</Text>

      {item.services &&
        item.services.map((service: any) => {
          return <Text key={service.name}>{service.name} </Text>;
        })}

      {item.agendado && (
        <BoxCancel
          style={{
            backgroundColor: "#f35e85",
          }}
          onPress={() => item.cancelService(item)}
        >
          <Text>Cancelar</Text>
        </BoxCancel>
      )}
    </Container>
  );
};

export default ItemSchedule;
