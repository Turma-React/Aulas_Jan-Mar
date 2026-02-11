import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isInitializing } = useAuth();

  if (isInitializing) {
    return <p>Aguarde... carregando sessão</p>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
};
