import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import Home from "./pages/Home.jsx"
import Cadastro from "./pages/Cadastro"
import Login from "./pages/Login"
import DiarioViagens from "./pages/DiarioViagens.jsx"
import NoPage from "./pages/NoPage"
import Principal from "./pages/Principal.jsx";
import Orcamento from "./pages/Orcamento.jsx"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="cadastro" element={<Cadastro />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="diarioviagens" element={<DiarioViagens />} />
          <Route path="*" element={<NoPage />} />
          <Route path="principal" element={<Principal />} />
          <Route path="orcamento" element={<Orcamento />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
