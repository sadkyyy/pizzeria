
import Button from 'react-bootstrap/Button';
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";


const Profile = () => {
const { email, logout, getProfile } = useContext(UserContext);
 useEffect(() => {
  getProfile();
}, []);

  return (
    <>
      <label htmlFor="exampleFormControlInput" className="form-label mb-2">
        Email address
      </label>

     <p>{email}</p> 

      <Button onClick={logout}
        style={{
          backgroundColor: '#f48fb1',
          borderColor: '#f48fb1'
        }}
      >
        Cerrar sesión
      </Button>

    </>
  );
};

export default Profile;
