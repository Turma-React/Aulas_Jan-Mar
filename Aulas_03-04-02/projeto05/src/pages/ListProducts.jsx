import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ListProducts = () => {
  const [produts, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const carregarProdutos = async () => {
      const url = "https://fakestoreapi.com/products";
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    };
    carregarProdutos();
  }, []);
  return (
    <div>
      <h2>Catálogo</h2>
      <ul>
        {produts.map((product) => (
          <li
            key={product.id}
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/produtos/${product.id}`)}
          >
            {product.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListProducts;
