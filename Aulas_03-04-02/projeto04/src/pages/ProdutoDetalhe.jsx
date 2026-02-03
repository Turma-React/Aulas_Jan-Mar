import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProdutoDetalhe() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduto(data));
  }, [id]);

  if (!produto) return <p>Carregando...</p>;

  return (
    <div>
      <h2>{produto.title}</h2>
      <img src={produto.image} width="150" />
      <p>{produto.description}</p>
      <strong>R$ {produto.price}</strong>
    </div>
  );
}
