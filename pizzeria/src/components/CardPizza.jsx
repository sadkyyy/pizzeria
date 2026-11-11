
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext.jsx";

const CardPizza = ({ name, price, ingredients, img }) => {
  const { carrito, setCarrito } = useContext(CarritoContext);

  const agregarAlCarrito = () => {
    setCarrito([
      ...carrito,
      { name, price, ingredients, img, count: 1 },
    ]);
  };

  return (
    <>
      <section
        className="card"
        style={{
          maxWidth: "320px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <img
          src={img}
          className="card-img-top"
          alt={name}
          style={{ height: "200px", objectFit: "cover" }}
        />

        <div className="card-body">
          <h4 className="card-title text-start">{name}</h4>

          <p className="card-text">Ingredientes:</p>

          <ul>
            {ingredients.map((ingrediente, index) => {
              return <li key={index}>🍕 {ingrediente}</li>;
            })}
          </ul>

          <p className="card-price fw-bold fs-5">
            Precio: ${price}
          </p>

          <div className="d-flex justify-content-between mt-3">
            <button
              type="button"
              className="btn-outline theme-inverse"
            >
              Ver más +
            </button>

            <button
              type="button"
              onClick={agregarAlCarrito}
              className="btn-solid theme-inverse"
            >
              Añadir
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardPizza;
