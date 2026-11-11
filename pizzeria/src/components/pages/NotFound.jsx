
import { Link } from "react-router-dom";
import img from '../../assets/404.jpg';

const NotFound = () => {
  return (
    <div
      style={{
        backgroundImage: "url('" + img + "')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <h1>404</h1>

      <Link to="/" className="btn btn-primary">
        Volver al inicio
      </Link>

      <p>La página que buscas no existe</p>
      <p>¡Lo siento!</p>
    </div>
  );
};

export default NotFound;
