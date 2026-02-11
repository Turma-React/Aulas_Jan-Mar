import { useAuth } from "../hooks/useAuth";

const Home = () => {
  const { logout, token } = useAuth();
  return (
    <div>
      <h1>Área reservada ao Usuário logado</h1>
      <p>Token JWT:</p>
      <textarea value={token} readOnly rows={5} cols={60} />
      <br />
      <button onClick={logout}>Sair</button>
    </div>
  );
};

export default Home;
