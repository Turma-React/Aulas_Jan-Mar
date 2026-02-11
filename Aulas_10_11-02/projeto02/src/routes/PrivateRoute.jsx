// Importa Navigate do React Router para redirecionamento de rotas
import { Navigate } from "react-router-dom";
// Importa o hook customizado que acessa o AuthContext
import { useAuth } from "../hooks/useAuth";

/**
 * Componente PrivateRoute
 * Garante que apenas usuários autenticados possam acessar determinadas rotas
 *
 * Uso:
 * <PrivateRoute>
 *    <Home />
 * </PrivateRoute>
 */
export const PrivateRoute = ({ children }) => {
  // Obtém do AuthContext se o usuário está autenticado e se a sessão ainda está inicializando
  const { isAuthenticated, isInitializing } = useAuth();

  // Enquanto a autenticação está sendo verificada, exibe mensagem de carregamento
  if (isInitializing) {
    return <p>Aguarde... carregando sessão</p>;
  }

  // Se o usuário não estiver autenticado, redireciona para a página de login
  if (!isAuthenticated) {
    return <Navigate to="/" />; // "/" é a rota de login
  }

  // Se o usuário estiver autenticado, renderiza os componentes filhos
  return children;
};
