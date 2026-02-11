// Importa o hook customizado que acessa o AuthContext
import { useAuth } from "../hooks/useAuth";

/**
 * Componente Home
 * Mostra informações protegidas ao usuário logado
 */
const Home = () => {
  // Desestrutura logout e token do hook useAuth
  // logout: função para deslogar o usuário
  // token: token JWT armazenado no AuthContext
  const { logout, token } = useAuth();

  return (
    <div>
      {/* Título da página */}
      <h1>Área reservada ao Usuário logado</h1>

      {/* Exibe o token JWT */}
      <p>Token JWT:</p>
      {/* Textarea apenas para leitura, mostrando o token */}
      <textarea
        value={token} // Valor do token vindo do estado do AuthContext
        readOnly // Não permite edição do token
        rows={5} // Altura da textarea
        cols={60} // Largura da textarea
      />

      <br />

      {/* Botão de logout */}
      <button onClick={logout}>Sair</button>
      {/* Ao clicar, chama a função logout do AuthContext que limpa o token */}
    </div>
  );
};

// Exporta o componente para ser usado em outras partes da aplicação
export default Home;
