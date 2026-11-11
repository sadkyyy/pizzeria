
import Home from './components/pages/Home.jsx';
import Register from './components/pages/Register.jsx';
import Login from './components/pages/Login.jsx';
import Pizza from './components/pages/Pizza.jsx';
import Profile from './components/pages/Profile.jsx';
import NotFound from './components/pages/NotFound.jsx';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbarr.jsx';
import Footer from './components/Footer.jsx';
import CarritoContextProvider from './context/CarritoContext.jsx';
import Cart from './components/pages/Cart.jsx';
import { UserContext, UserProvider } from "./context/UserContext";
import {useContext } from "react"

const App = () => {
  return (
    <CarritoContextProvider>
      <UserProvider>
        <ContenidoApp />
      </UserProvider>
    </CarritoContextProvider>
  );
};

const ContenidoApp = () => {
  const { token } = useContext(UserContext);

  return (
    <>
  
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={token ? <Navigate to="/" /> : <Register />} />
        <Route path="/login" element={token ? <Navigate to="/" /> : <Login />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
