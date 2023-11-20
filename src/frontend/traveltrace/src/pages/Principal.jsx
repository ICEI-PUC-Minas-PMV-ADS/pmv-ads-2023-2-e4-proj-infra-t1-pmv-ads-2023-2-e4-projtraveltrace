import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/traveltrace.svg'
import austria from '../assets/austria.jpg'
import jerusalem from '../assets/jerusalem.jpg'
import butao from '../assets/butao.jpg'
import yukon from '../assets/yukon.jpg'
import './Principal.css'

function Principal() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const validarFormulario = () => {
    // Coloque aqui o código que você deseja executar antes de enviar o formulário
    // Isso impede que o formulário seja submetido return false;
    // Se tudo estiver correto, retorne true para permitir que o formulário seja submetido return true;
  }

  return (
    <div className="container">
      <div className="header">
        <nav>
          <div class="nav-logo"><span><img src={logo} alt="Travel Trace"></img></span></div>
          <ul className="nav-links">
            <li className="link">
              <Link to="/home">Home</Link>
            </li>
            <li className="link">
              <Link to="/orcamento">Orçamento</Link>
            </li>
            <li className="link">
              <Link to="/diarioviagens">Diário de Viagens</Link>
              </li>
              <li class="link">Rotas</li>
              <li class="link">Sobre</li>
          </ul>
        </nav>
      </div>


      <div className="container-cadastro">
        <div className="wrap-cadastro">

          <section class="section-container sugestion-container">
            <p class="section-subheader">Precisa de ajuda para escolher um destino?</p>
            <h2 class="section-header">Veja estas sugestões</h2>
            <div class="sugestion-grid">
              <div class="sugestion-card">
                <img src={austria} alt="austria" />
                <div class="details">
                  <span>Áustria</span>
                </div>
                <h4>Descubra a magia dos alpes</h4>
              </div>
              <div class="sugestion-card">
                <img src={jerusalem} alt="jerusalem" />
                <div class="details">
                  <span>Jerusalém</span>
                </div>
                <h4>Explore a história milenar e a espiritualidade</h4>
              </div>
              <div class="sugestion-card">
                <img src={butao} alt="butão" />
                <div class="details">
                  <span>Butão</span>
                </div>
                <h4>O país mais feliz do mundo!</h4>
              </div>
              <div class="sugestion-card">
                <img src={yukon} alt="yukon" />
                <div class="details">
                  <span>Yukon, Canadá</span>
                </div>
                <h4>Aventuras selvagens na terra do Norte!</h4>
              </div>
            </div>
          </section>



          <section class="client">
            <div class="section-container client-container">
              <h2 class="section-header">Vantagens do TravelTrace</h2>
              <div class="advantages-grid">
                <div class="advantages-card">
                  <h4>Tudo em um só lugar</h4>
                  <p>
                    Com o TravelTrace você não corre o risco de perder suas anotações e detalhes importantes da sua viagem. Tudo fica salvo na nuvem.
                  </p>
                </div>
                <div class="advantages-card">
                  <h4>Só o que realmente precisa</h4>
                  <p>
                    Sem informações desnecessárias que tiram o seu foco. Aqui cuidamos do que realmente importa na sua viagem.
                  </p>
                </div>
                <div class="advantages-card">
                  <h4>Multiplataforma</h4>
                  <p>
                    Disponível em Web e Mobile, você pode salvar aquela ideia que teve durante o trabalho, ou no ônibus, sempre disponível para você.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>

  );
}

export default Principal;