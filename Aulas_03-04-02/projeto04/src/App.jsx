import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ListProducts from "./pages/ListProducts";
import ProductDetails from "./pages/ProductDetails";
import MainLayout from "./layouts/MainLayout";
function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<ListProducts />} />
          <Route path="/produtos/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
