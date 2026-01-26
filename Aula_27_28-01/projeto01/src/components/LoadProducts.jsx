import { useEffect, useState } from "react";
import FormCatalog from "./FormCatalog";
const LoadProducts = ({ addToCart }) => {
  const [produtos, setProdutos] = useState([]);
  const [carregamento, setCarregamento] = useState(false);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const carregarProdutos = async () => {
      try {
        setCarregamento(true);
        const url = "https://fakestoreapi.com/products?limit=10";
        const resposta = await fetch(url);
        if (!resposta.ok)
          throw new Error("Não consegui carregar a lista de produtos");

        const dados = await resposta.json();
        setProdutos(dados);
      } catch (err) {
        setErro(err.message);
      } finally {
        setCarregamento(false);
      }
    };
    carregarProdutos();
  }, []);

  if (carregamento) return <h2>Carregando lista de produtos...</h2>;

  if (erro) return <h2>{erro}</h2>;

  return <FormCatalog products={produtos} addToCart={addToCart} />;
};

export default LoadProducts;
