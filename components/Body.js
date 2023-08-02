import { StyleSheet, View } from "react-native";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import {
  appendToExpression,
  clear,
  calculateResult,
  square,
  specialAppend,
  specialSquare,
  specialSqrt,
  sqrt,
} from "../store/calculatorSlice";

export default function Body({ theme }) {
  const numArray = [
    "C",
    "√x",
    "x^2",
    "*",
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
  ];
  const dispatch = useDispatch();
  const expression = useSelector((state) => state.calculator.expression);

  function handleBtnPress(item) {
    switch (item) {
      case "C":
        dispatch(clear());
        break;
      case "=":
        dispatch(calculateResult());
        break;
      case "x^2":
        expression === "" ? dispatch(specialSquare()) : dispatch(square());
        break;
      case "√x":
        expression === "" ? dispatch(specialSqrt()) : dispatch(sqrt());
        break;
      case "*":
        expression === ""
          ? dispatch(specialAppend(item))
          : dispatch(appendToExpression(item));
        break;
      case "/":
        expression === ""
          ? dispatch(specialAppend(item))
          : dispatch(appendToExpression(item));
        break;
      case "+":
        expression === ""
          ? dispatch(specialAppend(item))
          : dispatch(appendToExpression(item));
        break;
      case "-":
        expression === ""
          ? dispatch(specialAppend(item))
          : dispatch(appendToExpression(item));
        break;
      default:
        dispatch(appendToExpression(item));
        break;
    }
  }

  return (
    <View style={styles.container}>
      {numArray.map((item) => (
        <Button
          value={item}
          key={item}
          isNum={!!parseInt(item)}
          onPress={() => handleBtnPress(item)}
          theme={theme}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.65,
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: -200,
  },
});
