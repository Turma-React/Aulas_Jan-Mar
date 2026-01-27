import LoadProducts from "./components/LoadProducts";
import Cart from "./components/CartProduct";
import useLocalStorage from "./hooks/useLocalStorage";
import "./App.css";
import { useMemo } from "react";

function App() {
  // Estado do carrinho persistido no localStorage
  const [cart, setCart] = useLocalStorage("cart", []);

  // Função para adicionar produtos ao carrinho
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      // Verifica se o produto já existe no carrinho
      const itemExists = prevCart.find((order) => order.id === product.id);

      // Se existir, soma a quantidade
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

      // Se não existir, adiciona o produto ao carrinho
      return [...prevCart, product];
    });
  };

  // Limpa completamente o carrinho
  const onClearCart = () => {
    setCart([]);
  };

  const cartTotal = useMemo(() => {
    return cart.reduce((total, order) => {
      return total + order.price * order.quantity;
    }, 0);
  }, [cart]);

  return (
    <main className="app-layout">
      {/* Área de listagem dos produtos */}
      <section className="products">
        <h1>Produtos da Fake Store</h1>
        <LoadProducts addToCart={handleAddToCart} />
      </section>

      {/* Área do carrinho */}
      <aside className="cart-area">
        <Cart cart={cart} onClearCart={onClearCart} sumTotal={cartTotal} />
      </aside>
    </main>
  );
}

export default App;
