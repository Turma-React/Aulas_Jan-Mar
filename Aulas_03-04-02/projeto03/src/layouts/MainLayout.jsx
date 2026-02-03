import { NavLink, Outlet } from "react-router-dom";
import "./MainLayout.css";

const MainLayout = () => {
  return (
    <>
      <header>
        <h1>Universidade XYZ</h1>
        <nav>
          <NavLink to="/">Home</NavLink> |{" "}
          <NavLink to="/cursos">Cursos</NavLink> |{" "}
          <NavLink to="/alunos">Alunos</NavLink> |{" "}
          <NavLink to="/sobre">Sobre</NavLink>
        </nav>
        <hr />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
