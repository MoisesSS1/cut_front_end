import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { useContext } from "react";
import { AuthContext } from "../contexts/Auth";

export default function Router() {
  const authContext = useContext(AuthContext);

  return (
    <NavigationContainer>
      {authContext.authData?.token ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
