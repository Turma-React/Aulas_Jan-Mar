// URL base da API pública Fake Store, usada para autenticação e dados
const BASE_URL = "https://fakestoreapi.com";

/**
 * Função responsável por enviar as credenciais do usuário
 * para a API e obter um token JWT de autenticação.
 *
 * @param {string} username - Nome de usuário
 * @param {string} password - Senha do usuário
 * @returns {Promise<Object>} Objeto contendo o token JWT
 */
export const loginRequest = async (username, password) => {
  // Realiza a requisição HTTP para o endpoint de login da API
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST", // Método POST pois estamos enviando dados sensíveis
    headers: {
      "Content-Type": "application/json", // Indica que o corpo da requisição é JSON
    },
    // Converte o objeto JS em JSON para envio no corpo da requisição
    body: JSON.stringify({ username, password }),
  });

  // Se a API retornar qualquer status diferente de 2xx,
  // consideramos como erro de autenticação
  if (!response.ok) {
    throw new Error("Erro ao autenticar");
  }

  // A API retorna um objeto no formato:
  // { token: "JWT...." }
  // O response.json() já converte automaticamente para objeto JS
  return response.json();
};
