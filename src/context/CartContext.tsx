import { createContext, useContext, useMemo, useReducer, type ReactNode } from "react";
import type { Product } from "../types";

type CartItem = Product & { qty: number };
type State = { items: CartItem[] };

type Action =
  | { type: "ADD"; payload: Product }
  | { type: "REMOVE"; payload: number }
  | { type: "CLEAR" };

const CartCtx = createContext<{
  state: State;
  addToCart: (p: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  count: number;
  total: number;
} | null>(null);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD": {
      const exists = state.items.find(i => i.id === action.payload.id);
      if (exists) {
        return {
          items: state.items.map(i => i.id === exists.id ? { ...i, qty: i.qty + 1 } : i)
        };
      }
      return { items: [...state.items, { ...action.payload, qty: 1 }] };
    }
    case "REMOVE":
      return { items: state.items.filter(i => i.id !== action.payload) };
    case "CLEAR":
      return { items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { items: [] });

  const addToCart = (p: Product) => dispatch({ type: "ADD", payload: p });
  const removeFromCart = (id: number) => dispatch({ type: "REMOVE", payload: id });
  const clearCart = () => dispatch({ type: "CLEAR" });

  const count = state.items.reduce((n, i) => n + i.qty, 0);
  const total = state.items.reduce((n, i) => n + i.qty * i.price, 0);

  const value = useMemo(() => ({ state, addToCart, removeFromCart, clearCart, count, total }), [state]);

  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>;
}

export function useCart() {
  const ctx = useContext(CartCtx);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
