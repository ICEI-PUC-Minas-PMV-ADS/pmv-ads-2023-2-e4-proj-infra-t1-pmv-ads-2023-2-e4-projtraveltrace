import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/traveltrace.svg'
import './Login.css'

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const validarFormulario = () => {
    // Coloque aqui o código que você deseja executar antes de enviar o formulário
    // Isso impede que o formulário seja submetido return false;
    // Se tudo estiver correto, retorne true para permitir que o formulário seja submetido return true;
}
  
  return (
  <div className="container"> 
    <div className="container-cadastro"> 
      <div className="wrap-cadastro">
        <form action='home' className="cadastro-form" onsubmit="return validarFormulario()">
          <span className="cadastro-form-title"> <img src={logo} alt="Travel Trace"></img> </span>
          <span className="cadastro-form-title"> Login </span>

          <div className='wrap-input'>
            <input required className={email !== "" ? 'has-val input' : 'input'} 
            type='email' value={email} onChange={e => setEmail(e.target.value)}/>
            <span className='focus-input' data-placeholder='Email'></span>
          </div>

          <div className='wrap-input'>
            <input required className={password !== "" ? 'has-val input' : 'input'} 
            type='password' value={password} onChange={e => setPassword(e.target.value)}/>
            <span className='focus-input' data-placeholder='Senha'></span>
          </div>

          <div className='container-cadastro-form-btn'>
            <input type='submit' className='cadastro-form-btn' value='Realizar Login' />
          </div>

          <div className='text-center'>
            <span className='txt1'>Ainda não tem conta? </span>
            <a className='txt2' href='/login'><Link className='txt2' to="/cadastro">Cadastre-se.</Link></a>
          </div>

          <div className='text-center'>
            <span className='txt1'> </span>
            <a className='txt2' href='/login'><Link className='txt2' to="/home">Home</Link></a>
          </div>
        </form>
      </div>
    </div>
  </div>
  
  );
}

export default Login;