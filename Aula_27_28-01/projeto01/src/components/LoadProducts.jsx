import { useEffect, useState } from "react";
import FormCatalog from "./FormCatalog";

// Componente responsável por carregar os produtos da API
// e repassá-los para o FormCatalog
const LoadProducts = ({ addToCart }) => {
  // Estado que armazena os produtos vindos da API
  const [produtos, setProdutos] = useState([]);

  // Estado que controla o carregamento da requisição
  const [carregamento, setCarregamento] = useState(false);

  // Estado para armazenar mensagens de erro
  const [erro, setErro] = useState(null);

  // Executa a busca dos produtos apenas uma vez,
  // quando o componente é montado
  useEffect(() => {
    const carregarProdutos = async () => {
      try {
        // Ativa o loading
        setCarregamento(true);

        // Endpoint da Fake Store API
        const url = "https://fakestoreapi.com/products?limit=10";

        // Requisição HTTP
        const resposta = await fetch(url);

        // Verificação de erro HTTP
        if (!resposta.ok) {
          throw new Error("Não consegui carregar a lista de produtos");
        }

        // Converte a resposta para JSON
        const dados = await resposta.json();

        // Atualiza o estado com os produtos
        setProdutos(dados);
      } catch (err) {
        // Armazena a mensagem de erro
        setErro(err.message);
      } finally {
        // Finaliza o loading, com sucesso ou erro
        setCarregamento(false);
      }
    };

    carregarProdutos();
  }, []);

  // Renderização condicional para carregamento
  if (carregamento) {
    return <h2>Carregando lista de produtos...</h2>;
  }

  // Renderização condicional para erro
  if (erro) {
    return <h2>{erro}</h2>;
  }

  // Renderiza o formulário quando os dados estão prontos
  return <FormCatalog products={produtos} addToCart={addToCart} />;
};

export default LoadProducts;
