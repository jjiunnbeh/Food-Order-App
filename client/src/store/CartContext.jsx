import { createContext, useReducer } from "react";

export const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

function CartContextProvider({ children }) {
  const cartReducer = (state, action) => {
    if (action.type === "ADD") {
      //Check
      const exisitingItemIndex = state.cart.findIndex((cartItem) => {
        cartItem.id === action.cart.id;
      });

      const updatedItems = [...state.cart];

      if (exisitingItemIndex > -1) {
        const existingItem = state.cart[exisitingItemIndex];
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        updatedItems[exisitingItemIndex] = updatedItem;
      } else {
        updatedItems.push({ ...action.cartItem, quantity: 1 });
      }
      return { ...state, cart: updatedItems };
    }
    if (action.type === "REMOVE") {
      const exisitingItemIndex = state.cart.findIndex((cartItem) => {
        cartItem.id === action.id;
      });

      const existingCartItem = state.cart[exisitingItemIndex];
      const updatedItems = [...state.cart];
      if (existingCartItem.quantity === 1) {
        updatedItems.splice(exisitingItemIndex, 1);
      } else {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity - 1,
        };
        updatedItems[exisitingItemIndex] = updatedItem;
      }
      return { ...state, cart: updatedItems };
    }
    return state;
  };

  const [foodCart, dispatch] = useReducer(cartReducer, { cart: [] });

  const addToCart = (item) => {
    dispatch({ type: "ADD", item: item });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE", id: id });
  };

  const ctxValue = {
    cart: foodCart.cart,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
export default CartContextProvider;
