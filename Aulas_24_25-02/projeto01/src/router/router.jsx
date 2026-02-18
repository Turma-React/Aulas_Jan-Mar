import { createBrowserRouter, redirect } from "react-router-dom";
import Login, { action as loginAction } from "../pages/Login";
import Products, { loader as productsLoader } from "../pages/Products";
import { getAccessToken } from "../api/axios";

const protectedLoader = async () => {
  const token = getAccessToken();

  if (!token) {
    throw redirect("/");
  }

  return null;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    action: loginAction,
  },
  {
    path: "/products",
    element: <Products />,
    loader: async () => {
      await protectedLoader();
      return productsLoader();
    },
  },
]);
