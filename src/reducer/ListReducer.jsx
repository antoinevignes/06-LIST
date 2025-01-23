import { useReducer } from "react";

const initialState = {
  input: "",
  texts: [],
  color: "palevioletred",
  size: "15px",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "updateInput":
      return {
        ...state,
        input: action.payload,
      };

    case "addInput":
      if (state.input === "") return state;
      return {
        ...state,
        texts: [
          ...state.texts,
          { color: state.color, size: state.size, text: state.input },
        ],
        input: "",
      };

    case "changeColor":
      return {
        ...state,
        color: action.payload,
      };

    case "changeSize":
      return {
        ...state,
        size: action.payload,
      };

    case "deleteEntry":
      return {
        ...state,
        texts: state.texts.filter((_, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

const useListReducer = () => useReducer(reducer, initialState);

export default useListReducer;
