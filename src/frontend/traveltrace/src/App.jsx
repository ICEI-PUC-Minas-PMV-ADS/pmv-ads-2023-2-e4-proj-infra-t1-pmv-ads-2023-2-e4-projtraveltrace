import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import Home from "./pages/Home.jsx"
import Cadastro from "./pages/Cadastro"
import Login from "./pages/Login"
import NoPage from "./pages/NoPage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="cadastro" element={<Cadastro />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
