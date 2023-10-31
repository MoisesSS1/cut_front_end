<<<<<<< HEAD
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
=======
import Home from "./src/pages/Home/Home";

export default function App() {
  return <Home />;
>>>>>>> 8369642cdb5d159d5165cfb62f14193459297996
}
