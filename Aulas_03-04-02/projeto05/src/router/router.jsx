import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ListProducts from "../pages/ListProducts";
import ProductDetails from "../pages/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "produtos", element: <ListProducts /> },
      { path: "produtos/:id", element: <ProductDetails /> },
    ],
  },
]);
