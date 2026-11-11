
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext.jsx";
import { UserContext } from "../../context/UserContext";

const Cart = () => {
  const { carrito, setCarrito } = useContext(CarritoContext);

  const {token} = useContext (UserContext)

  const sumar = (id) => {
    const nuevaPizza = carrito.map((item) => {
      if (item.id === id) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    setCarrito(nuevaPizza);
  };

  const restar = (id) => {
    const listaRestada = carrito.map((item) => {
      if (item.id === id) {
        return { ...item, count: item.count - 1 };
      }
      return item;
    });

    const comprar = async () => {
    const response = await fetch("http://localhost:5000/api/checkouts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      cart: carrito,
    }),
  });
  if (response.ok) {
  alert("¡Compra realizada con éxito!");
  setCarrito([]);
} 
};





    const listaLimpia = listaRestada.filter((item) => item.count > 0);
    setCarrito(listaLimpia);
  };

  const total = carrito.reduce(
    (suma, item) => suma + item.price * item.count,
    0
  );

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-5">
        🛒 Detalles del pedido
      </h2>

      <div className="row justify-content-center">
        <div className="col-12 col-lg-9">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              {carrito.map((item, index) => (
                <div
                  className="row align-items-center py-4 border-bottom g-3"
                  key={index}
                >
                  <div className="col-12 col-md-5">
                    <h5 className="fw-bold text-capitalize mb-2">
                      🍕 {item.name}
                    </h5>
                    <p className="text-secondary mb-0">
                      Precio unitario: ${item.price}
                    </p>
                  </div>

                  <div className="col-6 col-md-3">
                    <p className="text-secondary small mb-2">
                      Cantidad
                    </p>

                    <div className="d-flex align-items-center gap-2">
                      <button
                        className="btn btn-outline-danger btn-sm"
                        type="button"
                        onClick={() => restar(item.id)}
                      >
                        −
                      </button>

                      <span className="fw-bold px-2">
                        {item.count}
                      </span>

                      <button
                        className="btn btn-outline-success btn-sm"
                        type="button"
                        onClick={() => sumar(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="col-6 col-md-4 text-md-end">
                    <p className="text-secondary small mb-2">
                      Subtotal
                    </p>
                    <h5 className="fw-bold mb-0">
                      ${(item.price * item.count).toLocaleString("es-CL")}
                    </h5>
                  </div>
                </div>
              ))}

              <div className="d-flex justify-content-between align-items-center mt-4 p-3 bg-light rounded">
                <h4 className="fw-bold mb-0">Total</h4>
                <h3 className="fw-bold text-success mb-0">
                  ${total.toLocaleString("es-CL")}
                </h3>
              </div>

              <div className="text-end mt-4">
 {/* si el token es true entonces mostramos el boton si es falso lo inhabilitamos*/}
                { token ? 
                <button onClick = {comprar}
                  className="btn btn-success btn-lg px-5"
                  type="button"
                >
                  Pagar
                </button>
                : undefined

                } 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
