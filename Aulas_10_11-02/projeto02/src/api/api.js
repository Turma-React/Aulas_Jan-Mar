const BASE_URL = "https://fakestoreapi.com";

export const loginRequest = async (username, password) => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error("Erro ao autenticar");
  }
  // retorna -> {token: "JWT......."}
  return response.json();
};
