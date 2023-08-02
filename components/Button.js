import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";

const screen = Dimensions.get("screen");
export default function Button({ value, onPress, isNum, theme }) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        isNum || value === "." || value === "0"
          ? theme === "light"
            ? {
                backgroundColor: "#181818",
              }
            : { backgroundColor: "#eee" }
          : theme === "light"
          ? { backgroundColor: "#73253c" }
          : {
              backgroundColor: "#c0a47f",
            },
        ,
        value === "=" && {
          backgroundColor: "#414a37",
          flex: 0.8,
        },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          theme === "light"
            ? {
                color: "#fff",
              }
            : { color: "#181818" },
        ]}
      >
        {value}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: screen.width / 5,
    height: screen.width / 5,
    borderRadius: screen.width / 5,
    backgroundColor: "#73253c",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 34,
  },
});
