
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

const App = () => {
  return (
    <CarritoContextProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </CarritoContextProvider>
  );
};

export default App;
