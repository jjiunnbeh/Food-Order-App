import { CartContext } from "../store/CartContext";
import { useContext } from "react";

export const BASE_URL = "http://localhost:3000";

const ctx = useContext(CartContext);
export const cartTotal = ctx.items.reduce(
  (totalPrice, item) => totalPrice + item.quantity * item.price,
  0
);
