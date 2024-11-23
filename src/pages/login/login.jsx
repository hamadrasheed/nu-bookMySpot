import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import { useState, useContext } from 'react';
import { toast } from "react-toastify";
import apiService from '../../shared/http';
import { AuthContext } from '../../context/context';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    try {

      e.preventDefault();
  
      const requestBody = {
        email: email,
        password: password,
      };
  
      const response = await apiService.post('/user/login', requestBody);

      login(response.data.token);

      toast.success(response.message, {
        position: 'top-center', 
        autoClose: true,
      });
      navigate('/dashboard');
      
    } catch (error) {
      const data = error?.response?.data; 
      toast.error(data.message, {
        position: 'top-center',
        autoClose: true,
      });
    }

  };

  return (
    <div className="login-container">
      <div className="card login-card">
        <h1 className="login-heading">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label login-label">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="form-control login-input"
              placeholder="example@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label login-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control login-input"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <a href="#" className="login-link">
              Forgot Password?
            </a>
            <button type="submit" className="btn btn-success login-button">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
