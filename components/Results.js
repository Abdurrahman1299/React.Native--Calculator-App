import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { deleteChar } from "../store/calculatorSlice";

const screen = Dimensions.get("screen");

export default function Results({ theme }) {
  const dispatch = useDispatch();
  const expression = useSelector((state) => state.calculator.expression);
  const result = useSelector((state) => state.calculator.result);

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.value,
          {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
          },
        ]}
      >
        <TouchableOpacity onPress={() => dispatch(deleteChar())}>
          <Ionicons name="backspace" size={40} color={"#a32449"} />
        </TouchableOpacity>
        <Text
          style={[
            styles.expression,
            theme === "light"
              ? { color: "#000" }
              : {
                  color: "#ebe0ca",
                },
          ]}
        >
          {expression}
        </Text>
      </View>
      <View style={styles.value}>
        <Text
          style={[
            styles.result,
            theme === "light"
              ? { color: "#000" }
              : {
                  color: "#eee",
                },
          ]}
        >
          {result}
        </Text>
      </View>
      <View
        style={{
          borderBottomColor: "#414a37",
          borderBottomWidth: 1,
          width: screen.width - 50,
          marginBottom: -5,
          paddingTop: 15,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20,
  },

  value: {
    width: screen.width,
    paddingHorizontal: 30,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  expression: {
    marginBottom: 30,
    fontWeight: "300",
    fontSize: 20,
  },
  result: {
    fontSize: 45,
    fontWeight: "700",
  },
});
