import img from '../assets/Header.jpg';

const Header = () => {
const headerStyle = {
 backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(' + img + ')',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
 height: '200px',
  color: 'white',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',

}


    return (
        <header style={headerStyle}>
       <h1 >Pizzería Mamma Mia!</h1>
       <p>¡Tenemos las mejores pizzas que podras encontrar!</p>
        </header>

    )
    
}

export default Header