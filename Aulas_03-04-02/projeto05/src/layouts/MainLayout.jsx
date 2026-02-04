import { Outlet, NavLink } from "react-router-dom";
import "./MainLayout.css";
const MainLayout = () => {
  return (
    <>
      <header>
        <h1>Fake Store</h1>
        <nav>
          <NavLink to="/">Home</NavLink> |
          <NavLink to="/produtos">Produtos</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
