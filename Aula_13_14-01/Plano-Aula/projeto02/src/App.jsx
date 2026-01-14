import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";
import Footer from "./components/Footer";
import Section from "./components/Section";
function App() {
  return (
    <>
      {/*CSS Global */}
      <h1>Olá, Mundo!</h1>
      {/*CSS de componente */}
      <Header />
      <Main />
      <h3>Olá de novo, Mundo</h3>
      <Section />
      {/* CSS inline dinâmico */}
      <Footer />
    </>
  );
}

export default App;
