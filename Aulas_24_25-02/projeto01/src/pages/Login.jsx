import { Form, useActionData, useNavigate } from "react-router-dom";
import authService from "../api/authService";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";

//Executado quando o Form for submetido
export const action = async ({ request }) => {
  const formData = await request.formData();

  const credentials = {
    username: formData.get("username"),
    password: formData.get("password"),
  };

  try {
    return await authService.login(credentials);
  } catch (error) {
    return { error: "Credenciais inválidas" };
  }
};

const Login = () => {
  const data = useActionData();
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  // Se o login for bem-sucedido, salva os dados de autenticação
  // e redireciona para a página de produtos
  useEffect(() => {
    if (data?.accessToken) {
      setAuth(data);
      navigate("/products");
    }
  }, [data, setAuth, navigate]);

  return (
    <div>
      <h1>Login</h1>
      <Form method="post">
        <input name="username" placeholder="emilys" />
        <br />
        <input name="password" placeholder="emilyspass" type="text" />
        <br />
        <br />
        <button type="submit">Entrar</button>
      </Form>

      {data?.error && <p>{data.error}</p>}
    </div>
  );
};

export default Login;
