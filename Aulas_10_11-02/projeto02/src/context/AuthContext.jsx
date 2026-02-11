import { createContext, useEffect, useState } from "react";
import { loginRequest } from "../api/api";
import { saveToken, getToken, removeToken } from "../utils/storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    const storedToken = getToken();
    if (storedToken) {
      setToken(storedToken);
    }
    setIsInitializing(false);
  }, []);

  const login = async (username, password) => {
    const data = await loginRequest(username, password);
    setToken(data.token);
    saveToken(data.token);
  };

  const logout = () => {
    setToken(null);
    removeToken();
  };

  const isAuthenticated = !!token;
  const value = { token, login, logout, isAuthenticated, isInitializing };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
