import FormProduct from "./FormProduct";
const FormCatalog = ({ products, addToCart }) => {
  return (
    <section>
      {products.map((product) => (
        <FormProduct key={product.id} product={product} addToCart={addToCart} />
      ))}
    </section>
  );
};

export default FormCatalog;
