import { PRODUCTS } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Products() {
  return (
    <main style={{padding:16, display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(280px,1fr))", gap:16}}>
      {PRODUCTS.map(p => <ProductCard key={p.id} product={p} />)}
    </main>
  );
}
