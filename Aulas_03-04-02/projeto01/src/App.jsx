import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TrabalheCososco from "./pages/TrabalheConosco";
import Navbar from "./components/NavBar";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <>
      <h1>Estou em todas as páginas</h1>
      <Navbar /> {/* ->  Precisa estar em BrowserRouter */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vagas" element={<TrabalheCososco />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
