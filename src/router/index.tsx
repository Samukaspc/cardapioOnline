import { BrowserRouter, Routes,  Route } from "react-router-dom";
import Container from "../pages";
import Login from "../pages/acessoCadastro/login";
import Cadastro from "../pages/acessoCadastro/cadastro";
import RecuperarSenha from "../pages/acessoCadastro/recuperarSenha";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Container /> } />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/recuperarSenha" element={<RecuperarSenha />} />
            </Routes>
        </BrowserRouter>
    )
}