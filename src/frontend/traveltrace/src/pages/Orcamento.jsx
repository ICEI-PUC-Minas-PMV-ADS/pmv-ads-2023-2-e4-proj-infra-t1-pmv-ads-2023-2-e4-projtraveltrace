import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/traveltrace.svg";
import "./Orcamento.css";


function Orcamento(){
  const [dtIda, setdtIda] = useState("")
  const [dtVolta, setdtVolta] = useState("")
  const [obs, setobs] = useState("")
  const [valorIda, setvalorIda] = useState("")
  const [valorVolta, setvalorVolta] = useState("")
  const [hospedagem, sethospedagem] = useState("")
  const [passeio, setpasseio] = useState("")
  const [orcamentoRest, setorcamentoRest] = useState("")
  const [valorTotal, setvalorTotal] = useState("")


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
          <form className="orcamento-form">
            <span className="orcamento-form-title">
              <img src={logo} alt="Travel Trace" />
            </span>

            <span className="orcamento-form-title">Orçamento</span>

            <div className="wrap-input-date">
              <input className="input-date" type="date" value={dtIda} onChange={e => setdtIda(e.target.value)} required/>
              <span className="focus-input-date"  data-placeholder = "Data de Ida" ></span>
            </div>

             <div className="wrap-input-date">
              <input className="input-date" type="date" value={dtVolta} onChange={e => setdtVolta(e.target.value)} required/>
              <span className="focus-input-date"  data-placeholder = "Data de Volta" ></span>
            </div> 

            <div className="wrap-input">
            <input className={valorIda !== "" ? 'has-val input' : 'input'} type="number" value={valorIda} onChange={e => setvalorIda(e.target.value)} required/>
              <span className="focus-input"  data-placeholder = "Valor de Ida" ></span>
            </div>

            <div className="wrap-input">
              <input className={ valorVolta !== "" ? 'has-val input' : 'input'} type="number" value={valorVolta} onChange={e => setvalorVolta(e.target.value)} required/>
              <span className="focus-input"  data-placeholder = "Valor de Volta" ></span>
            </div>

            <div className="wrap-input">
              <input className={ hospedagem!== "" ? 'has-val input' : 'input'} type="number" value={hospedagem} onChange={e => sethospedagem(e.target.value)} required />
              <span className="focus-input"  data-placeholder = "Hospedagem" ></span>
            </div>

            <div className="wrap-input">
              <input className={ passeio !== "" ? 'has-val input' : 'input'} type="number" value={passeio} onChange={e => setpasseio(e.target.value)} required/>
              <span className="focus-input"  data-placeholder = "Passeio" ></span>
            </div>


            <div className="wrap-input">
              <input className={ orcamentoRest !== "" ? 'has-val input' : 'input'} type="number" value={orcamentoRest} onChange={e => setorcamentoRest(e.target.value)} required />
              <span className="focus-input"  data-placeholder = "Orçamento Restante" ></span>
            </div>

            <div className="wrap-input">
              <input className={ valorTotal !== "" ? 'has-val input' : 'input'} type="number" value={valorTotal} onChange={e => setvalorTotal(e.target.value)} required/>
              <span className="focus-input"  data-placeholder = "Valor Total Gasto" ></span>
            </div>

            <div className="wrap-input">
              <input className={ obs !== "" ? 'has-val input' : 'input'} type="text" value={obs} onChange={e => setobs(e.target.value)}/>
              <span className="focus-input"  data-placeholder = "Observação" ></span>
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
