
import { useState } from 'react';



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

     const [error, setError] = useState(false);


      const validarDatos = (e) => {
            e.preventDefault(); 
     if (!email.trim() || !password.trim()) {
                setError(true);
                return;
            }
     if (password.trim().length < 6) {
                setError(true);
                return;
            }
            setError(false);
            alert('¡Login exitoso!');
        };

    return (
        <>
        
            <form className="formulario" onSubmit={validarDatos}>
                {error ? <p style={{ color: 'red' }}> todos los campos son requeridos</p> : null}
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div> 
                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" name="password" className="form-control" 
                    onchange={(e) => setPassword(e.target.value)}
                    />
                </div> 
                <button type="submit" className="btn btn-primary">Enviar</button>
                <div className="d-flex justify-content-center">

                </div>
            </form>
        
        
        </>
        
    )
}   

export default Login