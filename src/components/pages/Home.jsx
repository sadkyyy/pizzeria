import { useState, useEffect } from "react";
import Header from '../Header.jsx';
import CardPizza from '../CardPizza.jsx';



const Home = () => {
const [pizzas, setPizzas] = useState([]);

useEffect(() => {
  const fetchPizzas = async () => {
    const url = "http://localhost:5001/api/pizzas";
    const response = await fetch(url);
    const data = await response.json();
    setPizzas(data);
  };
  fetchPizzas();
},
[]);

    return (
      <div className="home">
          <Header />
     <div className="d-flex flex-wrap justify-content-center gap-3 mt-4 mb-4">
      {pizzas.map((pizza, index) => {
      return (
            <CardPizza
              key={index}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
            />
          );
          
        })}
          
      </div>
      </div>
    );

    
  };
  

export default Home;