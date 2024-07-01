import './Register.css';
import Logo from '../../assets/logo2.png';

function Register() {
  return (
    <div className="register-container">
      <div className="register-box">
      <img src={Logo} alt="Logo" className="logo" />

        <div className="register-header">
          <h2>Welcome Back</h2>
          <p>Don't have an account yet? </p>
        </div>
        <form className='register-form'>
          <input type="email" placeholder="Email Address" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <button type="submit" className="register-button">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
