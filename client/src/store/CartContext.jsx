import { createContext, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  addToCart: (item) => {},
  removeFromCart: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD") {
    const existingIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const updatedItems = [...state.items];
    if (existingIndex > -1) {
      const existingItem = state.items[existingIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }
    return { ...state, items: updatedItems };
  }
  if (action.type === "REMOVE") {
    const existingIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingItem = state.items[existingIndex];
    const updatedItems = [...state.items];

    if (existingItem.quantity === 1) {
      updatedItems.splice(existingIndex, 1);
    } else {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      updatedItems[existingIndex] = updatedItem;
    }
    return { ...state, items: updatedItems };
  }
  return state;
}

function CartContextProvider({ children }) {
  const [cart, dispatchCart] = useReducer(cartReducer, { items: [] });
  const addToCart = (item) => {
    dispatchCart({ type: "ADD", item });
  };
  const removeFromCart = (id) => {
    dispatchCart({ type: "REMOVE", id });
  };

  const ctxValue = {
    items: cart.items,
    addToCart,
    removeFromCart,
  };
  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
export default CartContextProvider;
