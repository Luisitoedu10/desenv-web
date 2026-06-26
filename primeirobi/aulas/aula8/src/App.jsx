import { useState } from "react";
import "./App.css";

export default function App() {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [mostrarSenha, setMostrarSenha] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("https://dummyjson.com/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: "emilys",
                password: "emilyspass",
                expiresInMins: 30, // optional, defaults to 60
            }),
            credentials: "include", // Include cookies (e.g., accessToken) in the request
        })
            .then((res) => res.json())
            .then(json => localStorage.setItem("token", json.acessToken));
        // Aqui você pode adicionar a lógica de autenticação
        console.log("Login:", { usuario, senha });
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-header">
                    <h1>Bem-vindo</h1>
                    <p>Faça login para continuar</p>
                </div>

                <form onSubmit={handleSubmit} className="login-form">
                    <div className="input-group">
                        <label htmlFor="usuario">Usuário</label>
                        <input
                            type="text"
                            id="usuario"
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                            placeholder="Digite seu usuário"
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="senha">Senha</label>
                        <div className="password-wrapper">
                            <input
                                type={mostrarSenha ? "text" : "password"}
                                id="senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                placeholder="Digite sua senha"
                                required
                            />
                            <button
                                type="button"
                                className="toggle-password"
                                onClick={() => setMostrarSenha(!mostrarSenha)}
                            >
                                {mostrarSenha ? "👁️" : "👁️‍🗨️"}
                            </button>
                        </div>
                    </div>

                    <div className="form-options">
                        <label className="checkbox-label">
                            <input type="checkbox" />
                            <span>Lembrar-me</span>
                        </label>
                        <a href="#" className="forgot-password">
                            Esqueceu a senha?
                        </a>
                    </div>

                    <button type="submit" className="login-button">
                        Entrar
                    </button>
                </form>

                <div className="login-footer">
                    <p>
                        Não tem uma conta? <a href="#">Cadastre-se</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
