const Navbar = () => {
    const total = 25000;
    const token = false; 

    return (
        <nav className="nav w-100" style={{backgroundColor: 'black'}}>
            <a className="nav-link disabled" aria-disabled="true">Pizzería Mamma Mia!</a>
            <a className="nav-link" href="#">🍕 Home</a>
    
           {token ? (
           <>
                    <a className="nav-link" href="#">🔓 Profile</a>
                    <a className="nav-link" href="#">🔒 Logout</a>
                </>
            ) : ( 
                <>
                    <a className="nav-link" href="#">🔐 Login</a>
                    <a className="nav-link" href="#">🔐 Register</a>
                </>
            )}

            {/* <a className="nav-link" href="#">🔒 Logout</a>
            <a className="nav-link" href="#">🔐 Login</a>
            <a className="nav-link" href="#">🔐 Register</a> */}
            
            <a className="nav-link ms-auto" href="#">🛒 Total: ${total}</a>
        </nav>         
    );
}

export default Navbar;