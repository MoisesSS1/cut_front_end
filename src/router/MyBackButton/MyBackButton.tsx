import { getHeaderTitle } from "@react-navigation/elements";
import { View, Text } from "react-native";

const MyBackButton = ({ navigation, route, options, back }: any) => {
  const title = getHeaderTitle(options, route.name);
  return (
    <View>
      <Text>a</Text>
    </View>
  );
};

export default MyBackButton;
