import Home from "./src/pages/Home/Home";
import Agenda from "./src/pages/Agenda/Agenda";
import ProfileProfessional from "./src/pages/ProfileProfessional/ProfileProfessional";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "", headerShown: false }}
          />
          <Stack.Screen
            name="Agenda"
            component={Agenda}
            options={{ headerTransparent: true, headerShown: false }}
          />
          <Stack.Screen
            name="ProfileProfessional"
            options={{ headerTransparent: true, title: "" }}
            component={ProfileProfessional}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
