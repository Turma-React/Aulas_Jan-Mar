import { NavLink } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <nav>
      {/* Não faz reload -> Troca de componentes */}
      {/* NavLink é mais moderno */}
      {/* 
      <Link to="/">Home</Link>
      <Link to="/vagas">Trabalhe conosco</Link>
      */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/vagas">Trabalhe conosco</NavLink>
    </nav>
  );
};

export default NavBar;
