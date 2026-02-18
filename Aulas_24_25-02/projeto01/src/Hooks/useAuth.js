import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
export const useAuth = () => {
  //useAuth é um hook personalizado que retorna auth e setAuth do AuthContext
  return useContext(AuthContext);
};
