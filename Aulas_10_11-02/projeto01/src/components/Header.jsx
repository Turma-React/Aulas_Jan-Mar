import useTheme from "../hooks/useTheme";
import useUser from "../hooks/useUser";
const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, login, logout, isAuthenticated } = useUser()
  return (
    <header style={{ padding: "10px" }}>
        <h1>Info do Context</h1>
        <p>Tema atual: <strong>{ theme }</strong></p>
        <button onClick={toggleTheme}>
            Troca de tema 
        </button>
        <hr />
        {
          isAuthenticated ? 
          (
            <>
              <p>Usuário: <strong>{user.name}</strong></p>
              <button onClick={logout}>Sair</button>
            </>
          )
          :
          (
          <button onClick={login}>Fazer login</button>
        )
        }

    </header>
  )
}

export default Header
