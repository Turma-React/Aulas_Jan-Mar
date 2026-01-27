import { useForm } from "react-hook-form";
import CardProduct from "./CardProduct";
import "./FormProduct.css";

// Componente responsável por adicionar um produto ao carrinho
const FormProduct = ({ product, addToCart }) => {
  // Hook do react-hook-form para controle do formulário
  const { register, handleSubmit } = useForm();

  // Função chamada ao submeter o formulário
  const onSubmit = (dados) => {
    addToCart({
      // Espalha os dados originais do produto
      ...product,

      // Adiciona a quantidade escolhida (convertida para número)
      quantity: Number(dados.quantity),
    });
  };

  return (
    // handleSubmit faz a validação antes de chamar onSubmit
    <form onSubmit={handleSubmit(onSubmit)} className="container">
      {/* Exibe as informações do produto */}
      <CardProduct product={product} />

      {/* Campo de quantidade controlado pelo react-hook-form */}
      <input
        type="number"
        min="1"
        defaultValue={1}
        {...register("quantity", { required: true })}
      />

      {/* Botão de envio do formulário */}
      <button type="submit">Adicionar ao carrinho</button>
    </form>
  );
};

export default FormProduct;
