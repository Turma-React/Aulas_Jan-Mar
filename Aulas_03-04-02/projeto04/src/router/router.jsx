import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Produtos";
import Produtos from "../pages/Produtos";
import ProdutoDetalhe from "../pages/ProdutoDetalhe";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "produtos", element: <Produtos /> },
      { path: "produtos/:id", element: <ProdutoDetalhe /> },
    ],
  },
]);
