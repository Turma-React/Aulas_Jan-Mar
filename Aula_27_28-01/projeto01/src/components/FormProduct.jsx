import { useForm } from "react-hook-form";
import CardProduct from "./CardProduct";
import "./FormProduct.css";
const FormProduct = ({ product, addToCart }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (dados) => {
    addToCart({
      ...product,
      quantity: Number(dados.quantity),
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container">
      <CardProduct product={product} />
      <input
        type="number"
        min="1"
        defaultValue={1}
        {...register("quantity", { required: true })}
      />
      <button type="submit"> Adicionar ao carrinho</button>
    </form>
  );
};

export default FormProduct;
