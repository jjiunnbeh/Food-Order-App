import { useContext } from "react";
import Modal from "./Modal";
import { CartContext } from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem";

function Cart() {
  const userProgressCtx = useContext(UserProgressContext);
  const cartContext = useContext(CartContext);
  const cartTotal = cartContext.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );
  const handleCloseCart = () => {
    userProgressCtx.hideCart();
  };
  const handleCheckOut = () => {
    userProgressCtx.showCheckOut();
  };

  return (
    <Modal className="cart" active={userProgressCtx.progress === "cart"} onClose={userProgressCtx.progress === "cart" ? handleCloseCart : null}>
      <h2>Your Cart {cartContext.items.length === 0 && 'is now empty'}</h2>
      <ul>
        {cartContext.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onDecrease={() => cartContext.removeFromCart(item.id)}
            onIncrease={() => cartContext.addToCart(item)}
          />
        ))}
      </ul>
      {cartContext.items.length > 0 && <p className="cart-total">S$ {cartTotal.toFixed(2)}</p>}
      <p className="modal-actions">
        <button onClick={handleCloseCart}>Close</button>
        {cartContext.items.length > 0 && <button onClick={handleCheckOut}>CheckOut</button>}
      </p>
    </Modal>
  );
}

export default Cart;
