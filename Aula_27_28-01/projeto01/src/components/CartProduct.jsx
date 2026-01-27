import "./CartProduct.css";
const CartProduct = ({ cart, onClearCart, sumTotal }) => {
  return (
    <div className="cart">
      <h3>Carrinho de compras</h3>
      {cart.length == 0 ? (
        <p>O carrinho está vazio</p>
      ) : (
        <>
          <h3 style={{ color: "green" }}>
            Valor total:{" "}
            {sumTotal.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </h3>
          <button onClick={onClearCart} className="clear-cart-button">
            Remover todos os produtos do carrinho
          </button>
          <ul>
            {cart.map((order) => (
              <li key={order.id} className="order">
                <h6>{order.title}</h6>
                <p>Quantidade: {order.quantity}</p>
                <p>Subtotal: R$ {(order.price * order.quantity).toFixed(2)}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default CartProduct;
