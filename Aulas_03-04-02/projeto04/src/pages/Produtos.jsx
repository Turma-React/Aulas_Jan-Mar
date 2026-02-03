import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProdutos(data));
  }, []);

  return (
    <div>
      <h2>Produtos</h2>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            <Link to={`/produtos/${produto.id}`}>{produto.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
