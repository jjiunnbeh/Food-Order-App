import { useContext } from "react";
import Modal from "./Modal";
import { CartContext } from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

function Cart() {
  const userProgressCtx = useContext(UserProgressContext);
  const cartContext = useContext(CartContext);
  const cartTotal = cartContext.items.reduce(
  (totalPrice, item) => totalPrice + item.quantity * item.price,
  0
);
const handleCloseCart = ()=>
{
    userProgressCtx.hideCart();
}
const handleCheckOut = ()=>
{
    userProgressCtx.showCheckOut();
}

  return (
    <Modal className="cart" active={userProgressCtx.progress === 'cart'}>
      <h2>Your Cart</h2>
      <ul>
        {cartContext.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <p className="cart-total">S$ {cartTotal}</p>
      <p className="modal-actions">
        <button onClick={handleCloseCart}>Close</button>
        <button onClick={handleCheckOut}>CheckOut</button>
      </p>
    </Modal>
  );
}

export default Cart;
