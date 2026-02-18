import axios from "axios";

/*
  Criamos uma instância do Axios centralizada.

  Vantagens:
  ✅ Evita repetir baseURL
  ✅ Permite interceptors globais
  ✅ Facilita autenticação
*/
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,

  /*
    DummyJSON NÃO usa cookies nem sessão baseada em credenciais.

    IMPORTANTE:
    withCredentials: true → causaria erro de CORS
  */
  withCredentials: false,
});

/*
  Tokens mantidos em memória (variáveis do módulo).

  ✔ Simples
  ✔ Bom para projeto didático
  ⚠ Somem ao recarregar a página (F5)
*/
let accessToken = null;
let refreshTokenValue = null;

/* ------------------------------------------------------------------ */
/* TOKEN HELPERS                                                       */
/* ------------------------------------------------------------------ */

/*
  Salva ambos os tokens após login bem-sucedido.
*/
export const setTokens = ({ accessToken: at, refreshToken }) => {
  accessToken = at;
  refreshTokenValue = refreshToken;
};

/*
  Atualiza apenas o accessToken (usado após refresh).
*/
export const setAccessToken = (token) => {
  accessToken = token;
};

/*
  Permite que loaders / componentes consultem o token atual.
*/
export const getAccessToken = () => accessToken;

/* ------------------------------------------------------------------ */
/* REQUEST INTERCEPTOR                                                 */
/* ------------------------------------------------------------------ */

/*
  Executa ANTES de qualquer requisição sair.

  Objetivo:
  → Injetar Authorization automaticamente
*/
api.interceptors.request.use((config) => {
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

/* ------------------------------------------------------------------ */
/* RESPONSE INTERCEPTOR (AUTO REFRESH)                                 */
/* ------------------------------------------------------------------ */

/*
  Flags de controle:

  isRefreshing → evita múltiplos refresh simultâneos
  queue → fila de requests aguardando novo token
*/
let isRefreshing = false;
let queue = [];

/*
  Resolve todas as requisições pendentes após refresh.
*/
const processQueue = (token) => {
  queue.forEach((cb) => cb(token));
  queue = [];
};

api.interceptors.response.use(
  /*
    Caso sucesso → apenas repassa a resposta
  */
  (response) => response,

  /*
    Caso erro → podemos tratar autenticação expirada
  */
  async (error) => {
    const originalRequest = error.config;

    /*
      Só tratamos erro 401 (Unauthorized).

      Qualquer outro erro → repassa normalmente.
    */
    if (error.response?.status !== 401) {
      return Promise.reject(error);
    }

    /*
      Evita loop infinito:

      Se já tentamos refresh e falhou → aborta.
    */
    if (originalRequest._retry) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    /* -------------------------------------------------------------- */
    /* SE JÁ EXISTE REFRESH EM ANDAMENTO → FILA                       */
    /* -------------------------------------------------------------- */

    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        queue.push((token) => {
          /*
            Se refresh falhou → rejeita
          */
          if (!token) {
            reject(error);
            return;
          }

          /*
            Reenvia request com novo token
          */
          originalRequest.headers.Authorization = `Bearer ${token}`;
          resolve(api(originalRequest));
        });
      });
    }

    /* -------------------------------------------------------------- */
    /* EXECUTA REFRESH                                                */
    /* -------------------------------------------------------------- */

    isRefreshing = true;

    try {
      /*
        Segurança básica:
        Não há refreshToken → não há como renovar sessão.
      */
      if (!refreshTokenValue) {
        throw new Error("No refresh token available");
      }

      /*
        Solicita novo accessToken ao backend
      */
      const response = await api.post("/auth/refresh", {
        refreshToken: refreshTokenValue,
      });

      const newAccessToken = response.data.accessToken;

      /*
        Atualiza token em memória
      */
      setAccessToken(newAccessToken);

      /*
        Libera requests pendentes
      */
      processQueue(newAccessToken);

      /*
        Reexecuta request original
      */
      originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

      return api(originalRequest);
    } catch (refreshError) {
      /*
        Se refresh falhar → invalida fila
      */
      processQueue(null);

      return Promise.reject(refreshError);
    } finally {
      /*
        Sempre resetamos a flag
      */
      isRefreshing = false;
    }
  },
);
