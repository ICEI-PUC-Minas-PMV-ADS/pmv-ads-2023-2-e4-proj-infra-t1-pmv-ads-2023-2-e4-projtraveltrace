import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Importe useNavigate
import logo from "../assets/traveltrace.svg";
import "./Orcamento.css";
import axios from "axios";

function Orcamento() {
  const [dtIda, setdtIda] = useState("");
  const [dtVolta, setdtVolta] = useState("");
  const [pais, setPais] = useState("");
  const [cidade, setCidade] = useState("");
  const [valor, setValor] = useState("");
  const [passeio, setPasseio] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const [token, setToken] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // Mensagem de sucesso

  const navigate = useNavigate(); // Inicialize useNavigate

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
        setToken(storedToken);
    }
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const formattedDtIda = new Date(dtIda).toISOString().split('T')[0]; // Formatar a data de ida
      const formattedDtVolta = new Date(dtVolta).toISOString().split('T')[0]; // Formatar a data de volta

      const novoOrcamento = {
        pais,
        cidade,
        data_inicio: formattedDtIda,
        data_fim: formattedDtVolta,
        descricao: passeio,
        valor,
      };

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      // Faz a chamada POST com o novo orçamento
      await axios.post('http://127.0.0.1:8000/viagens/', novoOrcamento, config);

      // A chamada foi bem-sucedida, defina isSaved como true
      setIsSaved(true);
      setdtIda("");
      setdtVolta("");
      setPais("");
      setCidade("");
      setValor("");
      setPasseio("");
      navigate('/principal');
      setSuccessMessage("Salvo com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar orçamento:", error);
      console.log("Detalhes do erro:", error.response.data);
      setSuccessMessage(""); // Limpe a mensagem de sucesso em caso de erro
    }
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
          <form className="orcamento-form" onSubmit={handleSave}>
            <span className="orcamento-form-title">
              <img src={logo} alt="Travel Trace" />
            </span>

            <span className="orcamento-form-title">Orçamento</span>

            <div className="wrap-input">
              <label className="input-label bold-label" htmlFor="pais">
                País
              </label>
              <input
                className={pais !== "" ? "has-val input" : "input"}
                type="text"
                id="pais"
                value={pais}
                onChange={(e) => setPais(e.target.value)}
                required
              />
            </div>

            <div className="wrap-input">
              <label className="input-label bold-label" htmlFor="cidade">
                Cidade
              </label>
              <input
                className={cidade !== "" ? "has-val input" : "input"}
                type="text"
                id="cidade"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                required
              />
            </div>

            <div className="wrap-input">
              <label className="input-label bold-label" htmlFor="valor">
                Valor
              </label>
              <input
                className={valor !== "" ? "has-val input" : "input"}
                type="number"
                id="valor"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                required
              />
            </div>

            <div className="wrap-input-date">
              <input
                className="input-date"
                type="date"
                value={dtIda}
                onChange={(e) => setdtIda(e.target.value)}
                required
              />
              <span
                className="focus-input-date"
                data-placeholder="Data de Ida"
              ></span>
            </div>

            <div className="wrap-input-date">
              <input
                className="input-date"
                type="date"
                value={dtVolta}
                onChange={(e) => setdtVolta(e.target.value)}
                required
              />
              <span
                className="focus-input-date"
                data-placeholder="Data de Volta"
              ></span>
            </div>

            <div className="wrap-input">
              <label className="input-label bold-label" htmlFor="passeio">
                Descrição do Passeio
              </label>
              <input
                className={passeio !== "" ? "has-val input" : "input"}
                type="text"
                id="passeio"
                value={passeio}
                onChange={(e) => setPasseio(e.target.value)}
                required
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
              <Link className="txt2" to="/NoPage">
                Voltar para Roteiro
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


export default Orcamento;
