import { redirect } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { api, getAccessToken } from "../api/axios";

export const loader = async () => {
  const token = getAccessToken();

  if (!token) {
    throw redirect("/");
  }

  const response = await api.get("/products");
  return response.data.products;
};

export default function Products() {
  const products = useLoaderData();

  if (!products) return <div>Carregando...</div>;

  return (
    <div>
      <h1>Produtos</h1>

      {products.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
}
