import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { count } = useCart();
  return (
    <header style={{display:"flex",gap:16,alignItems:"center",padding:"12px 16px",borderBottom:"1px solid #eee"}}>
      <Link to="/" aria-label="home">🏠 Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart" aria-label="cart">🛒 Cart <span data-testid="cart-badge">({count})</span></Link>
    </header>
  );
}
