import Home from "./src/pages/Home/Home";
import Agenda from "./src/pages/Agenda/Agenda";
import ProfileProfessional from "./src/pages/ProfileProfessional/ProfileProfessional";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/pages/Login/Login";
import CreateAccount from "./src/pages/Createaccount/CreateAccount";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          options={{ headerTransparent: true, title: "LOGIN" }}
          component={Login}
        />
        <Stack.Screen
          name="CreateAccount"
          options={{ headerTransparent: true, title: "CRIAR CONTA" }}
          component={CreateAccount}
        />
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
  );
}
