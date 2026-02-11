const KEY = "token";

export const saveToken = (token) => {
  sessionStorage.setItem(KEY, token);
};

export const getToken = () => {
  return sessionStorage.getItem(KEY);
};

export const removeToken = () => {
  sessionStorage.removeItem(KEY);
};
