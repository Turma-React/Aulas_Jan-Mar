import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Header />
      <Aside />
      <Main />
      <Footer usuario="maurohs">último login em 07/01/2026 às 19:00</Footer>
    </>
  );
}

export default App;
