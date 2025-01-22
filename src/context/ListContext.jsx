/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import useListReducer from "../reducer/ListReducer";

const ListContext = createContext();

const ListContextProvider = ({ children }) => {
  const context = useListReducer();

  return (
    <ListContext.Provider value={context}>{children}</ListContext.Provider>
  );
};

export const useListContext = () => useContext(ListContext);

export default ListContextProvider;
