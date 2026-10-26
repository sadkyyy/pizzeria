import {pizzaCart} from '../assets/pizzas.js';
import { useState } from 'react';

const Cart = () => {
    const [pizza, setPizza] = useState(pizzaCart);

    const sumar = (id) => {
         const nuevaPizza = pizza.map((item) => {
            if (item.id === id) {
                return {...item, count: item.count + 1};
            }
            return item;    
        });
        setPizza(nuevaPizza);
     }

     const restar = (id) => {

         const listaRestada = pizza.map((item) => {
            if (item.id === id) {
                return {...item, count: item.count - 1};
            }
            return item;    
        });
        

        const listaLimpia = listaRestada.filter((item) => item.count > 0);

        setPizza(listaLimpia);
    }

    let total = 0;
    pizza.forEach((item) => {
        total += item.price * item.count;
    });

    return ( 
        <>
        <h2>Detalles del pedido:</h2>
        <ul>
        {pizza.map((item, index) => (
            <li key={index}>
                {item.name} {item.price}
              
                <button type="button" onClick={() => sumar(item.id)}> + </button>
                <p>cantidad {item.count}</p>
                
                <button type="button" onClick={() => restar(item.id)}> - </button>
            </li>
        ))}
        </ul>
        <h2>Total: ${total}</h2>
        </>     
    )
}       

export default Cart;