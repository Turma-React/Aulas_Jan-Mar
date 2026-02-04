import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const carregarProduto = async () => {
      const url = `https://fakestoreapi.com/products/${id}`;
      const response = await fetch(url);
      const data = await response.json();
      setProduct(data);
    };
    carregarProduto();
  }, [id]);

  if (!product) return <h2>CARREGANDO INFORMAÇÕES...</h2>;

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>
        <strong>Preço:</strong> ${product.price}
      </p>

      <hr />
      <p>
        <strong>URL atual:</strong> {window.location.origin + location.pathname}
      </p>

      <button onClick={() => navigate(-1)}>Voltar</button>
    </div>
  );
};

export default ProductDetails;
