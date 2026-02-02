import { NavLink, Outlet } from "react-router-dom";
import "./MainLayout.css";
const MainLayout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contact">Fale conosco</NavLink>
          <NavLink to="/about">Nos conheça</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <small>Todos os direitos reservados - 2026</small>
      </footer>
    </>
  );
};

export default MainLayout;
