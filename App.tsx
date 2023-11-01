import { SafeAreaView as SafeAreaViewAndroid } from "react-native-safe-area-context";
import { SafeAreaView as SafeAreaViewIos } from "react-native";
import Home from "./src/pages/Home/Home";
import { Platform } from "react-native";
import Agenda from "./src/pages/Agenda/Agenda";

export default function App() {
  const tela = "agenda";

  return (
    <>
      {Platform.OS === "ios" && (
        <SafeAreaViewIos style={{ flex: 1 }}>
          {/* {tela === "home" && <Home />} */}
          {tela === "agenda" && <Agenda />}
          {/* {tela === "ajuda" && <Home />}
          {tela === "perfil" && <Home />} */}
        </SafeAreaViewIos>
      )}

      {Platform.OS === "android" && (
        <SafeAreaViewAndroid style={{ flex: 1 }}>
          {/* {tela === "home" && <Home />} */}
          {tela === "agenda" && <Agenda />}
          {/* {tela === "ajuda" && <Home />}
          {tela === "perfil" && <Home />} */}
        </SafeAreaViewAndroid>
      )}
    </>
  );
}
