// Importa o hook useContext do React
import { useContext } from "react";
// Importa o contexto de autenticação que criamos
import { AuthContext } from "../context/AuthContext";

/**
 * Hook customizado useAuth
 * Serve como atalho para acessar o AuthContext de qualquer componente
 *
 * Exemplo de uso:
 * const { token, login, logout, isAuthenticated } = useAuth();
 */
export const useAuth = () => {
  // Retorna o valor do AuthContext usando useContext
  // Isso dá acesso direto a token, login, logout, isAuthenticated e isInitializing
  return useContext(AuthContext);
};
