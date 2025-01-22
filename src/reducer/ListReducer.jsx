import { useReducer } from "react";

const initialState = { input: "", texts: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case "updateInput":
      return {
        ...state,
        input: action.payload,
      };

    case "addInput":
      return {
        ...state,
        texts: [...state.texts, state.input],
        input: "",
      };
  }
};

const useListReducer = () => useReducer(reducer, initialState);

export default useListReducer;
