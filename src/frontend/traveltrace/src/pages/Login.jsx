import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/traveltrace.svg';
import './Login.css';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); 
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/token/', {
        username: username,
        password: password,
      });

      const accessToken = response.data.access;
      localStorage.setItem('token', accessToken);

      navigate('/principal');
    } catch (error) {
      setMessage("Credenciais erradas.");
      console.error("Erro ao fazer login:", error);

    }
  }

  return (
    <div className="container">
      <div className="container-cadastro">
        <div className="wrap-cadastro">
          <form className="cadastro-form" onSubmit={handleLogin}>
            <span className="cadastro-form-title"> <img src={logo} alt="Travel Trace"></img> </span>
            <span className="cadastro-form-title"> Login </span>

            <div className='wrap-input'>
              <input required className={username !== "" ? 'has-val input' : 'input'}
                type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
              <span className='focus-input' data-placeholder='Username'></span>
            </div>

            <div className='wrap-input'>
              <input required className={password !== "" ? 'has-val input' : 'input'}
                type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
              <span className='focus-input' data-placeholder='Senha'></span>
            </div>

            <div className='container-cadastro-form-btn'>
              <input type='submit' className='cadastro-form-btn' value='Realizar Login' />
            </div>

            <div className='text-center'>
              <span className='txt1'>Ainda não tem conta? </span>
              <Link className='txt2' to="/cadastro">Cadastre-se.</Link>
            </div>

            <div className='text-center'>
              <span className='txt1'> </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;