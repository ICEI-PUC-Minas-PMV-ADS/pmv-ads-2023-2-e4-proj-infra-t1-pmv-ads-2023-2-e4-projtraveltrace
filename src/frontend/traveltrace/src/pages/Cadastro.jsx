import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/traveltrace.svg';
import './Cadastro.css';
import axios from 'axios';

function Cadastro() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); 

  const handleCadastro = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register/', {
        username: userName,
        email,
        password,
      });

      // Usuário cadastrado com sucesso
      setMessage("Usuário cadastrado com sucesso!");
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          // Erro de dados duplicados
          setMessage("Já existe um usuário com esse username ou email cadastrado.");
        } else {
          // Outro erro
          setMessage("Erro ao cadastrar o usuário. Tente novamente.");
        }
      } else {
        // Erro de rede ou servidor
        setMessage("Erro de rede ou servidor. Tente novamente.");
      }
    }
  };

  return (
    <div className="container">
      <div className="container-cadastro">
        <div className="wrap-cadastro">
          <form className="cadastro-form">
            <span className="cadastro-form-title"> <img src={logo} alt="Travel Trace"></img> </span>
            <span className="cadastro-form-title"> Cadastre-se </span>

            <div className='wrap-input'>
              <input className={userName !== "" ? 'has-val input' : 'input'}
                type='text' value={userName} onChange={e => setUserName(e.target.value)} />
              <span className='focus-input' data-placeholder='Nome de usuário'></span>
            </div>

            <div className='wrap-input'>
              <input className={email !== "" ? 'has-val input' : 'input'}
                type='email' value={email} onChange={e => setEmail(e.target.value)} />
              <span className='focus-input' data-placeholder='Email'></span>
            </div>

            <div className='wrap-input'>
              <input className={password !== "" ? 'has-val input' : 'input'}
                type='password' value={password} onChange={e => setPassword(e.target.value)} />
              <span className='focus-input' data-placeholder='Senha'></span>
            </div>

            <div className='container-cadastro-form-btn'>
              <button className='cadastro-form-btn' onClick={handleCadastro}>
                Cadastrar
              </button>
            </div>

            {message && <p>{message}</p>} {/* Exibir a mensagem na tela */}
            
            <div className='text-center'>
              <span className='txt1'>Já possui conta?</span>
              <Link className='txt2' to="/login">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
