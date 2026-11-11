
import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState("");

  // login 
  const login = async (email, password) => {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    setToken(data.token);
    setEmail(data.email);

    localStorage.setItem("token", data.token);
    localStorage.setItem("email", data.email);
  };

  // registro
  const register = async (email, password) => {
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    setToken(data.token);
    setEmail(data.email);

    localStorage.setItem("token", data.token);
    localStorage.setItem("email", data.email);
  };

  // funcion logout
  const logout = () => {
    setToken(null);
    setEmail("");

    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  //obtener el perfil
  const getProfile = async () => {
    const response = await fetch("http://localhost:5000/api/auth/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    setEmail(data.email);
  };

  return (
    <UserContext.Provider
      value={{ token, email, login, register, logout, getProfile }}
    >
      {children}
    </UserContext.Provider>
  );
};

