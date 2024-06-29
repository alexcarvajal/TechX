import './Login.css';
import Logo from './logo2.png';

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
      <img src={Logo} alt="Logo" className="logo" />

        <div className="login-header">
          <h2>Welcome Back</h2>
          <p>Don't have an account yet? <a href="/signup">Sign up</a></p>
        </div>
        <form className='login-form'>
          <input type="email" placeholder="Email Address" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
