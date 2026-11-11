import {CarritoContext} from "../context/CarritoContext"
import {useContext} from "react"
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";


const Navbar = () => {
  const { carrito } = useContext(CarritoContext);
  const total = carrito.reduce(
    (suma, pizza) => suma + pizza.price,
    0 );
const { token, logout } = useContext(UserContext);

     
  return (
    <nav className="nav w-100" style={{ backgroundColor: 'black' }}>
      <a className="nav-link disabled" aria-disabled="true">
        Pizzería Mamma Mia!
      </a>

      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link className="nav-link active" to="/">Home</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/register">Register</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/pizza/p001">Pizza</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/profile">Profile</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/404">404</Link>
        </li>
      </ul>

      {token ? (
        <>
          <Link className="nav-link" to="/profile">🔓 Profile</Link>
          <Link className="nav-link" onClick={logout} to="/">🔒 Logout</Link>
        
        </>
      ) : (
        <>
          <Link className="nav-link" to="/login">🔐 Login</Link>
          <Link className="nav-link" to="/register">🔐 Register</Link>
        </>
      )}

      <Link className="nav-link ms-auto" to="/cart">
        🛒 Total: ${total}
      </Link>
    </nav>
  );
};

export default Navbar;
