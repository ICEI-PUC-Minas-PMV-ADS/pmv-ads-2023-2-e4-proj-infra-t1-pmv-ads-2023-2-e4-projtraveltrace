import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/traveltrace.svg'
import './Cadastro.css'

function Cadastro() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  return (
  <div className="container"> 
    <div className="container-cadastro"> 
      <div className="wrap-cadastro">
        <form className="cadastro-form">
          <span className="cadastro-form-title"> <img src={logo} alt="Travel Trace"></img> </span>
          <span className="cadastro-form-title"> Cadastre-se </span>

          <div className='wrap-input'>
            <input className={nome !== "" ? 'has-val input' : 'input'} 
            type='text' value={nome} onChange={e => setNome(e.target.value)}/>
            <span className='focus-input' data-placeholder='Nome'></span>
          </div>
          
          <div className='wrap-input'>
            <input className={email !== "" ? 'has-val input' : 'input'} 
            type='email' value={email} onChange={e => setEmail(e.target.value)}/>
            <span className='focus-input' data-placeholder='Email'></span>
          </div>

          <div className='wrap-input'>
            <input className={password !== "" ? 'has-val input' : 'input'} 
            type='password' value={password} onChange={e => setPassword(e.target.value)}/>
            <span className='focus-input' data-placeholder='Senha'></span>
          </div>

          <div className='container-cadastro-form-btn'>
            <buton className='cadastro-form-btn'>Cadastrar</buton>
          </div>

          <div className='text-center'>
            <span className='txt1'>Já possui conta?</span>
            <a className='txt2' href='/login'><Link className='txt2' to="/login">Login.</Link></a>
          </div>
        </form>
      </div>
    </div>
  </div>
  
  );
}

export default Cadastro;
