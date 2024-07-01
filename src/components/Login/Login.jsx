import './Login.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Logo from '../../assets/logo2.png';
import config from '../../config';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${config.apiBaseUrl}/loginUser`, {
        user_email: email,
        user_password: password
      });
      if (response.status === 200) {
        // Manejar el éxito del login
        console.log('Login exitoso', response.data);
        navigate('/dashboard'); // Redirigir al dashboard o a la página deseada
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      // Manejar el error, mostrar un mensaje al usuario, etc.
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={Logo} alt="Logo" className="logo" />

        <div className="login-header">
          <h2>Welcome Back</h2>
          <p>Don't have an account yet? <Link to="/register">Create an account</Link></p>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
