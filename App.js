import {
  StyleSheet,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Body from "./components/Body";
import Results from "./components/Results";
import { Provider } from "react-redux";
import store from "./store";
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function App() {
  const theme = useColorScheme();
  const [curTheme, setCurTheme] = useState(theme);

  function toggleThemeHandler() {
    if (curTheme === "dark") {
      setCurTheme("light");
    } else if (curTheme === "light") {
      setCurTheme("dark");
    }
  }

  return (
    <View
      style={[
        styles.container,
        curTheme === "light"
          ? { backgroundColor: "#fff" }
          : { backgroundColor: "#181818" },
      ]}
    >
      <StatusBar style={curTheme === "light" ? "dark" : "light"} />
      <TouchableOpacity
        style={[
          styles.toggleThemes,
          curTheme === "light"
            ? { backgroundColor: "#474747" }
            : { backgroundColor: "#eee" },
        ]}
        onPress={toggleThemeHandler}
      >
        {curTheme === "light" ? (
          <MaterialCommunityIcons name="weather-night" size={32} color="#fff" />
        ) : (
          <Feather name="sun" size={32} color="#141414" />
        )}
      </TouchableOpacity>
      <Provider store={store}>
        <View>
          <Results theme={curTheme} />
          <Body theme={curTheme} />
        </View>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  toggleThemes: {
    position: "absolute",
    left: 15,
    top: 30,
    width: 54,
    height: 54,
    borderRadius: 27,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5, // For Android
  },
});
