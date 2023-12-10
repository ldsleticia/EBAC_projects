import { Link } from "react-router-dom";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
    <Link to={"/"} className="nav-link">Home</Link>
      <Link to={"/user"} className="nav-link">Registro de Usuários</Link>
      <Link to={"/listing"} className="nav-link">Respostas</Link>
    </nav>
  );
}

export default NavBar;
