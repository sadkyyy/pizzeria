
import { createContext, useState } from "react";

export const CarritoContext = createContext();

const contextProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  return (
    <CarritoContext.Provider value={{ carrito, setCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};

export default contextProvider;
