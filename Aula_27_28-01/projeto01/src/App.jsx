import LoadProducts from "./components/LoadProducts";
import Cart from "./components/CartProduct";
import useLocalStorage from "./hooks/useLocalStorage";
import "./App.css";
function App() {
  const [cart, setCart] = useLocalStorage("cart", []);
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((order) => order.id === product.id);

      if (itemExists) {
        return prevCart.map((order) =>
          order.id === product.id
            ? {
                ...order,
                quantity: order.quantity + product.quantity,
              }
            : order,
        );
      }

      return [...prevCart, product];
    });
  };

  const onClearCart = () => {
    setCart([]);
  };

  return (
    <main className="app-layout">
      <section className="products">
        <h1>Produtos da Fake Store</h1>
        <LoadProducts addToCart={handleAddToCart} />
      </section>
      <aside className="cart-area">
        <Cart cart={cart} onClearCart={onClearCart} />
      </aside>
    </main>
  );
}

export default App;
