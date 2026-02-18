import { api, setAccessToken } from "./axios";

let refreshTokenMemory = null;

const authService = {
  login: async (credentials) => {
    const response = await api.post("/auth/login", credentials);

    const { accessToken, refreshToken } = response.data;

    setAccessToken(accessToken);
    refreshTokenMemory = refreshToken;

    return response.data;
  },

  refreshToken: async () => {
    if (!refreshTokenMemory) {
      throw new Error("No refresh token available");
    }

    const response = await api.post("/auth/refresh", {
      refreshToken: refreshTokenMemory,
    });

    const { accessToken, refreshToken } = response.data;

    setAccessToken(accessToken);

    // DummyJSON pode rotacionar refresh token
    if (refreshToken) {
      refreshTokenMemory = refreshToken;
    }

    return response.data;
  },
};

export default authService;
