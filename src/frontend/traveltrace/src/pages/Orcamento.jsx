import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/traveltrace.svg";
import "./Orcamento.css";

function Orcamento() {
  const [passagemIda, setPassagemIda] = useState("");
  const [passagemVolta, setPassagemVolta] = useState("");
  const [passagemDescricao, setPassagemDescricao] = useState("");
  const [passagemValorIda, setPassagemValorIda] = useState("");
  const [passagemValorVolta, setPassagemValorVolta] = useState("");
  const [hospedagem, setHospedagem] = useState("");
  const [hospedagemDescricao, setHospedagemDescricao] = useState("");
  const [hospedagemValor, setHospedagemValor] = useState("");
  const [passeioSelecao, setPasseioSelecao] = useState("");
  const [passeioDescricao, setPasseioDescricao] = useState("");
  const [passeioValor, setPasseioValor] = useState("");
  const [orcamentoRestante, setOrcamentoRestante] = useState("");
  const validarFormulario = () => {
    // Inicialize uma variável para rastrear se o formulário é válido
    let formularioValido = true;

    // Validação do campo Data de Ida
    if (!passagemIda) {
      alert("Por favor, preencha a Data de Ida");
      formularioValido = false;
    }

    // Validação do campo Data de Volta
    if (!passagemVolta) {
      alert("Por favor, preencha a Data de Volta");
      formularioValido = false;
    }

    // Validação do campo Descrição da Passagem
    if (!passagemDescricao) {
      alert("Por favor, preencha a Descrição da Passagem");
      formularioValido = false;
    }

    // Validação do campo Valor de Ida
    if (!passagemValorIda) {
      alert("Por favor, preencha o Valor de Ida");
      formularioValido = false;
    }

    // Validação do campo Valor de Volta
    if (!passagemValorVolta) {
      alert("Por favor, preencha o Valor de Volta");
      formularioValido = false;
    }

    // Validação do campo Hospedagem
    if (!hospedagem) {
      alert("Por favor, preencha o campo Hospedagem");
      formularioValido = false;
    }

    // Validação do campo Descrição da Hospedagem
    if (!hospedagemDescricao) {
      alert("Por favor, preencha a Descrição da Hospedagem");
      formularioValido = false;
    }

    // Validação do campo Valor da Hospedagem
    if (!hospedagemValor) {
      alert("Por favor, preencha o Valor da Hospedagem");
      formularioValido = false;
    }

    // Validação do campo Passeio
    if (!passeioSelecao) {
      alert("Por favor, preencha o campo Passeio");
      formularioValido = false;
    }

    // Validação do campo Descrição do Passeio
    if (!passeioDescricao) {
      alert("Por favor, preencha a Descrição do Passeio");
      formularioValido = false;
    }

    // Validação do campo Valor do Passeio
    if (!passeioValor) {
      alert("Por favor, preencha o Valor do Passeio");
      formularioValido = false;
    }

    // Validação do campo Orçamento Restante
    if (!orcamentoRestante) {
      alert("Por favor, preencha o Orçamento Restante");
      formularioValido = false;
    }

    // Retorna true se o formulário for válido, caso contrário, retorna false
    return formularioValido;
  };

  return (
    <div className="container">
      <div className="menu">
        <img src={logo} alt="Logo" className="menu-logo" />
        <ul className="menu-list">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/orcamento">Orçamento</Link>
          </li>
          <li>
            <Link to="/roteiro">Roteiro</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
      <div className="container-orcamento">
        <div className="wrap-orcamento">
          <form className="orcamento-form" onSubmit={validarFormulario}>
            <span className="orcamento-form-title">
              <img src={logo} alt="Travel Trace" />
            </span>
            <span className="orcamento-form-title">Orçamento</span>
            {/* Campos de Passagem */}
            <div className="wrap-input">
              <input
                type="text"
                value={passagemIda}
                onChange={(e) => setPassagemIda(e.target.value)}
                placeholder="Data de ida (dd/mm/aaaa)"
              />
            </div>
            <div className="wrap-input">
              <input
                type="text"
                value={passagemVolta}
                onChange={(e) => setPassagemVolta(e.target.value)}
                placeholder="Data de volta (dd/mm/aaaa)"
              />
            </div>
            <div className="wrap-input">
              <input
                type="text"
                value={passagemDescricao}
                onChange={(e) => setPassagemDescricao(e.target.value)}
                placeholder="Observação/Descrição"
              />
            </div>
            <div className="wrap-input">
              <input
                type="text"
                value={passagemValorIda}
                onChange={(e) => setPassagemValorIda(e.target.value)}
                placeholder="Valor de ida (R$)"
              />
            </div>
            <div className="wrap-input">
              <input
                type="text"
                value={passagemValorVolta}
                onChange={(e) => setPassagemValorVolta(e.target.value)}
                placeholder="Valor de volta (R$)"
              />
            </div>
            {/* Campos de Hospedagem */}
            <div className="wrap-input">
              <input
                type="text"
                value={hospedagem}
                onChange={(e) => setHospedagem(e.target.value)}
                placeholder="Hospedagem (hotel)"
              />
            </div>
            <div className="wrap-input">
              <input
                type="text"
                value={hospedagemDescricao}
                onChange={(e) => setHospedagemDescricao(e.target.value)}
                placeholder="Descrição/observação"
              />
            </div>
            <div className="wrap-input">
              <input
                type="text"
                value={hospedagemValor}
                onChange={(e) => setHospedagemValor(e.target.value)}
                placeholder="Valor (R$)"
              />
            </div>
            {/* Campos de Passeio */}
            <div className="wrap-input">
              <input
                type="text"
                value={passeioSelecao}
                onChange={(e) => setPasseioSelecao(e.target.value)}
                placeholder="Passeio (praia)"
              />
            </div>
            <div className="wrap-input">
              <input
                type="text"
                value={passeioDescricao}
                onChange={(e) => setPasseioDescricao(e.target.value)}
                placeholder="Descrição/observação"
              />
            </div>
            <div className="wrap-input">
              <input
                type="text"
                value={passeioValor}
                onChange={(e) => setPasseioValor(e.target.value)}
                placeholder="Valor (R$)"
              />
            </div>
            <div className="wrap-input">
              <input
                type="text"
                value={orcamentoRestante}
                onChange={(e) => setOrcamentoRestante(e.target.value)}
                placeholder="Orçamento Restante (R$)"
              />
            </div>
            <div className="container-orcamento-form-btn">
              <input
                type="submit"
                className="orcamento-form-btn"
                value="Salvar Orçamento"
              />
            </div>
            <div className="text-center">
              <Link className="txt2" to="/login">
                Voltar para o Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Orcamento;
