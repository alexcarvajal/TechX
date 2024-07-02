import './Register.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Logo from '../../assets/logo2.png';
import config from '../../config';

function Register() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${config.apiBaseUrl}/createUser`, {
        user_name: name,
        user_lastname: lastName,
        user_email: email,
        user_password: password
      });
      if (response.status === 201) {
        // Manejar el éxito del registro
        console.log('Registro exitoso', response.data);
        navigate('/login'); // Redirigir al login o a la página deseada
      }
    } catch (error) {
      console.error('Error al crear el usuario:', error);
      // Manejar el error, mostrar un mensaje al usuario, etc.
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <img src={Logo} alt="Logo" className="logo" />

        <div className="register-header">
          <h2>Crea tu cuenta</h2>
          <p>Ya tienes cuenta? <Link to="/">Ingresa</Link></p>
        </div>
        <form className="register-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre"
            className="input-field"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Apellido"
            className="input-field"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="register-button">Regrístrate!</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
