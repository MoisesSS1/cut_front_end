import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../pages/Home/Home";
import Agenda from "../pages/Agenda/Agenda";
import ProfileProfessional from "../pages/ProfileProfessional/ProfileProfessional";
import Profile from "../pages/Profile/Profile";
import Help from "../pages/Help/Help";

const AppStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
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
        options={{ headerTransparent: true, headerShown: true, title: "" }}
        component={ProfileProfessional}
      />
      <Stack.Screen
        name="Profile"
        options={{ headerTransparent: true, title: "", headerShown: false }}
        component={Profile}
      />
      <Stack.Screen
        name="Help"
        options={{ headerTransparent: true, title: "", headerShown: false }}
        component={Help}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
