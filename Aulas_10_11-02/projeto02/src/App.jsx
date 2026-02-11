// Importa páginas da aplicação
import Login from "./pages/Login";
import Home from "./pages/Home";
// Importa componente de rota protegida
import { PrivateRoute } from "./routes/PrivateRoute";
// Importa componentes do React Router para navegação
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Importa o Provider de autenticação
import { AuthProvider } from "./context/AuthContext";

/**
 * Componente principal da aplicação
 */
function App() {
  return (
    // AuthProvider envolve toda a aplicação, permitindo que qualquer componente acesse o AuthContext
    <AuthProvider>
      {/* BrowserRouter é responsável por controlar o histórico de rotas do navegador */}
      <BrowserRouter>
        {/* Routes define todas as rotas da aplicação */}
        <Routes>
          {/* Rota pública: Login */}
          <Route path="/" element={<Login />} />

          {/* Rota protegida: Home */}
          <Route
            path="/home"
            element={
              // PrivateRoute garante que apenas usuários autenticados acessem
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

// Exporta o componente App como padrão
export default App;
