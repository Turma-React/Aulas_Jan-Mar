// Importa o hook useState do React para gerenciar estado local
import { useState } from "react";
// Importa o hook customizado que acessa AuthContext
import { useAuth } from "../hooks/useAuth";
// Importa useNavigate do React Router para redirecionamento de rotas
import { useNavigate } from "react-router-dom";

/**
 * Componente Login
 * Permite ao usuário inserir credenciais e autenticar na aplicação
 */
const Login = () => {
  // Obtém a função de login do AuthContext
  const { login } = useAuth();
  // Cria função navigate para mudar de rota após login
  const navigate = useNavigate();

  // Estado local para armazenar o usuário digitado
  const [username, setUserName] = useState("mor_2314"); // valor inicial fixo para testes
  // Estado local para armazenar a senha digitada
  const [password, setPassword] = useState("83r5^_"); // valor inicial fixo para testes

  /**
   * Função executada ao clicar no botão de login
   */
  const handleLogin = async () => {
    try {
      // Chama a função login do AuthContext (que faz a requisição na API)
      await login(username, password);
      // Se o login for bem-sucedido, redireciona para a página "/home"
      navigate("/home");
    } catch (error) {
      // Caso ocorra erro, exibe alerta simples
      alert("Falha no login");
    }
  };

  return (
    <div>
      {/* Título da página */}
      <h1>Login</h1>

      {/* Input para usuário */}
      <input
        value={username} // valor do estado username
        onChange={(e) => setUserName(e.target.value)} // atualiza o estado quando o usuário digita
        placeholder="Usuário" // texto de dica
      />
      <br />
      <br />

      {/* Input para senha */}
      <input
        type="password" // oculta os caracteres digitados
        value={password} // valor do estado password
        onChange={(e) => setPassword(e.target.value)} // atualiza o estado quando o usuário digita
      />
      <br />
      <br />

      {/* Botão que dispara handleLogin */}
      <button onClick={handleLogin}>Fazer login</button>
    </div>
  );
};

// Exporta o componente para ser usado em rotas ou outros componentes
export default Login;
