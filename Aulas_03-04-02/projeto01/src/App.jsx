import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TrabalheCososco from "./pages/TrabalheConosco";
import Navbar from "./components/NavBar";
function App() {
  return (
    <>
      <h1>Estou em todas as páginas</h1>
      <BrowserRouter>
        <Navbar /> {/* ->  Precisa estar em BrowserRouter */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vagas" element={<TrabalheCososco />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
