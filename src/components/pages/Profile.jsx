
import Button from 'react-bootstrap/Button';

const Profile = () => {
  return (
    <>
      <label htmlFor="exampleFormControlInput" className="form-label mb-2">
        Email address
      </label>

      <input
        type="email"
        className="form-control"
        id="exampleFormControlInput"
        placeholder="name@example.com"
      />

      <Button
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
