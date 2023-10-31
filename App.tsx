import { SafeAreaView as SafeAreaViewAndroid } from "react-native-safe-area-context";
import { SafeAreaView as SafeAreaViewIos } from "react-native";
import Home from "./src/pages/Home/Home";
import { Platform } from "react-native";

export default function App() {
  return (
    <>
      {Platform.OS === "ios" && (
        <SafeAreaViewIos style={{ flex: 1 }}>
          <Home />
        </SafeAreaViewIos>
      )}

      {Platform.OS === "android" && (
        <SafeAreaViewAndroid style={{ flex: 1 }}>
          <Home />
        </SafeAreaViewAndroid>
      )}
    </>
  );
}
