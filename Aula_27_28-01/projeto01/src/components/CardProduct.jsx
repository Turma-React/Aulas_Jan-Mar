const CardProduct = ({ product }) => {
  return (
    <>
      <h4>
        {product.title} - R$ {product.price}
      </h4>
      <p>
        <img src={product.image} alt={product.description} />
      </p>
      <p>
        <b>{product.category}</b>: {product.description}
      </p>
      <p>
        Mais informações:
        <br />
        <span>{product.rating?.count} avaliações</span>
        <br />
        <span>Nota média das avaliações: {product.rating?.rate}</span>
      </p>
    </>
  );
};

export default CardProduct;
