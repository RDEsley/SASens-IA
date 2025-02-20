import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/login.css";
import useLoginEffects from "../assets/js/login.js";

const Login = () => {
    useLoginEffects();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Aqui você pode validar login se necessário
        navigate("/home"); // Redireciona para a página principal
    };

    return (
        <>
            <div className="container" id="container">
                <div className="form-container sign-up">
                    <form>
                        <h1>Criar Conta</h1>
                        <div className="social-icons">
                            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                            <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                            <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                        <span>ou use seu email para registro</span>
                        <input type="text" placeholder="Nome" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Senha" />
                        <button>Cadastrar-se</button>
                    </form>
                </div>

                <div className="form-container sign-in">
                    <form>
                        <h1>Login</h1>
                        <div className="social-icons">
                            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                            <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                            <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                        <span>ou use seu email e senha</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Senha" />
                        <a href="#">Esqueceu sua Senha?</a>
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>

                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h1>Bem-vindo de Volta!</h1>
                            <p>Insira suas informações para usar todos os recursos do sistema!</p>
                            <button className="hidden" id="login">Login</button>
                        </div>
                        <div className="toggle-panel toggle-right">
                            <h1>Olá, Amigo!</h1>
                            <p>Cadastre-se com suas informações para usar todos os recursos do Sistema!</p>
                            <button className="hidden" id="register">Cadastrar-se</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
