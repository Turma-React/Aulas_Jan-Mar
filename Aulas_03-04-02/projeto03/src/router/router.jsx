import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Cursos from "../pages/Cursos";
import Alunos from "../pages/Alunos";
import Sobre from "../pages/Sobre";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "cursos", element: <Cursos /> },
      { path: "alunos", element: <Alunos /> },
      { path: "sobre", element: <Sobre /> },
    ],
  },
]);
