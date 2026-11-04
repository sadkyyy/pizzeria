
import Home from './components/pages/Home.jsx';
import Register from './components/pages/Register.jsx';
import Login from './components/pages/Login.jsx';
import Pizza from './components/pages/Pizza.jsx';
import Profile from './components/pages/Profile.jsx';
import NotFound from './components/pages/NotFound.jsx';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbarr.jsx';
import Footer from './components/Footer.jsx';
import CarritoContextProvider  from './context/CarritoContext.jsx';
import Cart from './components/pages/Cart.jsx'
import { UserProvider } from "./context/UserContext";
import { useContext } from 'react';
import { Navigate } from "react-router-dom";


const {token} = useContext(UserContext)
const App = () => {
  return (
  <CarritoContextProvider>
    <UserProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/register"
          element={token ? <Navigate to="/" /> : <Register />}
        />

        <Route
          path="/login"
          element={token ? <Navigate to="/" /> : <Login />}
        />

        <Route path="/pizza/p001" element={<Pizza />} />

        <Route
          path="/profile"
          element={token ? <Profile /> : <Navigate to="/login" />}
        />

        <Route path="/404" element={<NotFound />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </UserProvider>
  </CarritoContextProvider>
);
}; 

