import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <h1>Variedade e preços fake é só aqui</h1>
      <p>
        Clique em <Link to="/produtos">Produtos</Link> para conhecer nosso
        catálogo
      </p>
    </>
  );
};

export default Home;
