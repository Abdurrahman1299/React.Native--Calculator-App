import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expression: "",
  result: "0",
  prevAns: "",
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    specialAppend: (state, action) => {
      state.expression = state.prevAns + state.expression + action.payload;
    },
    appendToExpression: (state, action) => {
      state.expression = state.expression + action.payload;
    },
    clear: (state) => {
      state.expression = "";
      state.result = 0;
    },
    clearExpression: (state) => {
      state.expression = "";
    },
    calculateResult: (state) => {
      try {
        state.result = eval(state.expression).toString();
      } catch (error) {
        state.result = state.prevAns;
      }
      state.expression = "";
      state.prevAns = state.result;
    },
    deleteChar: (state) => {
      state.expression = state.expression.slice(0, -1);
    },
    square: (state) => {
      state.result = state.expression * state.expression;
      state.prevAns = state.result;
      state.expression = "";
    },
    specialSquare: (state) => {
      state.result = state.prevAns * state.prevAns;
      state.prevAns = state.result;
    },
    sqrt: (state) => {
      state.result = Math.sqrt(state.expression);
      state.prevAns = state.result;
      state.expression = "";
    },
    specialSqrt: (state) => {
      state.result = Math.sqrt(state.prevAns);
      state.prevAns = state.result;
    },
  },
});

export const {
  appendToExpression,
  clear,
  specialAppend,
  clearExpression,
  calculateResult,
  deleteChar,
  specialSquare,
  specialSqrt,
  square,
  sqrt,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;
