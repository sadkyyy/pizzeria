import { useState, useEffect } from 'react';

const Pizza = () => {
    const [pizzas, setPizzas] = useState([]);
     
    useEffect(() => {
        const mostrarPizzas = async () => {
            const url = "http://localhost:5001/api/pizzas";
            const response = await fetch(url);
            const data = await response.json();
            setPizzas(data);
        };
        mostrarPizzas();
    }, []);
echo "# pizzeria" >> README.md
    return (
        <div className="d-flex flex-wrap justify-content-center gap-4 mt-4"> 
            {pizzas.map((pizza) => (
               
                <section key={pizza.id} className="card" style={{ maxWidth: '320px' }}>
    
                    <img src={pizza.img} className="card-img-top" alt={pizza.name} style={{ height: '200px', objectFit: 'cover' }} />
                    
                    <div className="card-body d-flex flex-column">
                        <h4 className="card-title text-capitalize fw-bold">{pizza.name}</h4>
                        <p className="card-text text-muted">{pizza.desc}</p>
                        <p className="card-text mb-1 fw-bold">Ingredientes:</p>
                        <ul className="list-unstyled">
                            {pizza.ingredients.map((ingrediente, index) => (
                                <li key={index} className="text-capitalize">🍕 {ingrediente}</li>
                            ))}
                        </ul>
                        
                       
                        <div className="mt-auto">
                            <p className="fw-bold fs-5 text-center mb-3">Precio: ${pizza.price}</p>
                            <div className="d-flex justify-content-between">
                               
                                <button type="button" className="btn btn-outline-dark">Ver más 👀</button>
                                <button type="button" className="btn btn-dark">Añadir 🛒</button>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </div>   
    );
};                  

export default Pizza;