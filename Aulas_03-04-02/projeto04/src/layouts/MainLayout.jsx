import { Outlet, Link } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/produtos">Produtos</Link>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}
