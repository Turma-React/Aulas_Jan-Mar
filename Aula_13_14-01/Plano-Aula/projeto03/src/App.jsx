import NewsCard from "./components/NewsCard/NewsCard";
import ProductCard from "./components/ProductCard/ProductCard";
import ShowUserLogged from "./components/ShowUserLogged/ShowUserLogged";

function App() {
  return (
    <>
      <NewsCard />
      <ProductCard />
      <ShowUserLogged nome="Ana Silva" ehNivelOuro={true} />
    </>
  );
}

export default App;
