import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUserName] = useState("mor_2314");
  const [password, setPassword] = useState("83r5^_");

  const handleLogin = async () => {
    try {
      await login(username, password);
      navigate("/home");
    } catch (error) {
      alert("Falha no login");
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <input
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Usuário"
      />
      <br />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleLogin}>Fazer login</button>
    </div>
  );
};

export default Login;
