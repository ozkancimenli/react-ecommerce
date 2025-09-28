import type { Product } from "../types";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  return (
    <article style={{border:"1px solid #ddd",borderRadius:8,padding:12,width:280}}>
      <img src={product.image} alt={product.title} width={256} height={180} style={{objectFit:"cover",borderRadius:6}} />
      <h3>{product.title}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)} aria-label={`add-${product.id}`}>Add to Cart</button>
    </article>
  );
}
