import { useCart } from "../context/CartContext";

export default function Cart() {
  const { state, removeFromCart, clearCart, total } = useCart();
  return (
    <main style={{padding:16}}>
      <h2>Your Cart</h2>
      {state.items.length === 0 ? <p>Cart is empty.</p> : (
        <>
          <ul>
            {state.items.map(i => (
              <li key={i.id} style={{marginBottom:8}}>
                {i.title} x {i.qty} — ${(i.qty * i.price).toFixed(2)}
                <button onClick={() => removeFromCart(i.id)} style={{marginLeft:8}}>Remove</button>
              </li>
            ))}
          </ul>
          <p><strong>Total:</strong> ${total.toFixed(2)}</p>
          <button onClick={clearCart}>Clear</button>
        </>
      )}
    </main>
  );
}
