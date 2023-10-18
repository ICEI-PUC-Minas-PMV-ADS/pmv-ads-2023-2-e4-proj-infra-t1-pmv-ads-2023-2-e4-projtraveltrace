import React from 'react';
import { Link } from 'react-router-dom';



export default function Cadastro() {
    return (
        <>
        <h1>Login</h1>
 
        <p><Link to="/cadastro">Ainda não tem conta? Cadastre-se!</Link></p>
        
        <p><Link to="/home">Voltar para Home!</Link></p>

        
      </>
    
    )
}