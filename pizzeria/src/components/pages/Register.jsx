
import { useState } from 'react';
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";


const Register = () => {
  const {register} = useContext (UserContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  

  const [error, setError] = useState(false);

  const validarDatos = async (e) => {
   
    e.preventDefault(); 

    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      setError(true);
      return;
    }

    if (password !== confirmPassword) {
      setError(true);
      return;
    }
    if (password.trim.length < 6) {
        setError(true);
        return;
    }
  setError(false);
      await register(email, password);
      
  }; 

  return (
    <>
    
      <form className="formulario" onSubmit={validarDatos}>
        
    
        {error ? <p style={{ color: 'red' }}> todos los campos son requeridos</p> : null}

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div> 

        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password" 
            name="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div> 
        
        <div className="form-group">
          <label>Confirmar contraseña</label>
          <input
            type="password" 
            name="confirmPassword"
            className="form-control"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div> 
        
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </> 
  );
};   


export default Register;