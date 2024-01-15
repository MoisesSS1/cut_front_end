import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateAccount from "../pages/Createaccount/CreateAccount";
import Login from "../pages/Login/Login";

const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        options={{ headerTransparent: true, title: "LOGIN" }}
        component={Login}
      />
      <Stack.Screen
        name="CreateAccount"
        options={{
          headerTransparent: true,
          title: "CRIAR CONTA",
        }}
        component={CreateAccount}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
