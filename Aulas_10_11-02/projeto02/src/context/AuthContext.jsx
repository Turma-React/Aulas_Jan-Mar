// Importa hooks do React e funções auxiliares
import { createContext, useEffect, useState } from "react";
// Função que faz login na API e retorna o token
import { loginRequest } from "../api/api";
// Funções para salvar, recuperar e remover token no navegador
import { saveToken, getToken, removeToken } from "../utils/storage";

// Cria o contexto de autenticação que será compartilhado entre componentes
export const AuthContext = createContext();

/**
 * Componente Provider do AuthContext
 * Responsável por prover estado e funções de autenticação para toda a aplicação
 */
export const AuthProvider = ({ children }) => {
  // Estado que guarda o token JWT do usuário
  const [token, setToken] = useState(null);
  // Estado que indica se a aplicação ainda está verificando token armazenado
  const [isInitializing, setIsInitializing] = useState(true);

  /**
   * useEffect executa apenas uma vez ao montar o componente
   * Serve para carregar o token que pode estar salvo no storage do navegador
   */
  useEffect(() => {
    const storedToken = getToken(); // Pega o token salvo anteriormente, se houver
    if (storedToken) {
      setToken(storedToken); // Atualiza o estado com o token existente
    }
    setIsInitializing(false); // Finaliza o estado de inicialização
  }, []);

  /**
   * Função para realizar login
   * @param {string} username
   * @param {string} password
   */
  const login = async (username, password) => {
    const data = await loginRequest(username, password); // Chama a API
    setToken(data.token); // Atualiza estado com o token retornado
    saveToken(data.token); // Salva token no storage do navegador
  };

  /**
   * Função para realizar logout
   * Remove token do estado e do storage
   */
  const logout = () => {
    setToken(null); // Limpa estado
    removeToken(); // Remove token do storage
  };

  // Booleano que indica se o usuário está autenticado (true se houver token)
  const isAuthenticated = !!token;

  // Objeto que será fornecido para todos os componentes filhos via Context
  const value = { token, login, logout, isAuthenticated, isInitializing };

  // Provider do Context, envolvendo todos os filhos
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
