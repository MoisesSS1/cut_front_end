import { Container, Text, Pressable } from "./styled";
import { useState } from "react";

const RadioButton = ({ data, onSelect }: any) => {
  const [userOption, setUserOption] = useState<number | string>(data[0].value);

  const selectHandler = (value: number | string) => {
    onSelect(value);
    setUserOption(value);
  };

  return (
    <Container>
      {data.map((item: any) => {
        return (
          <Pressable
            key={item.value}
            onPress={() => selectHandler(item.value)}
            style={
              item.value === userOption
                ? { backgroundColor: "#9ffd9f" }
                : { backgroundColor: "aliceblue" }
            }
          >
            <Text> {item.value}</Text>
          </Pressable>
        );
      })}
    </Container>
  );
};

export default RadioButton;
