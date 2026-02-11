// Chave usada no sessionStorage para armazenar o token JWT
const KEY = "token";

/**
 * Salva o token JWT no sessionStorage
 * @param {string} token - Token JWT retornado pela API
 */
export const saveToken = (token) => {
  sessionStorage.setItem(KEY, token);
  // sessionStorage mantém os dados apenas enquanto a aba do navegador estiver aberta
  // diferente do localStorage, que persiste mesmo após fechar o navegador
};

/**
 * Recupera o token JWT do sessionStorage
 * @returns {string | null} Token JWT ou null se não existir
 */
export const getToken = () => {
  return sessionStorage.getItem(KEY);
};

/**
 * Remove o token JWT do sessionStorage
 * Geralmente usado no logout
 */
export const removeToken = () => {
  sessionStorage.removeItem(KEY);
};
