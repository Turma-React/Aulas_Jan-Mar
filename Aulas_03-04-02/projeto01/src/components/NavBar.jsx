import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <nav>
      {/* Não faz reload -> Troca de componentes */}
      <Link to="/">Home</Link>
      <Link to="/vagas">Trabalhe conosco</Link>
    </nav>
  );
};

export default NavBar;
