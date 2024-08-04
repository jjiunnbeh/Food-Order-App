import { useContext } from "react";
import Modal from "./Modal";
import { CartContext } from "../store/CartContext";
import { cartTotal } from "../utilities/cosntant";

function Cart() {
  const ctx = useContext(CartContext);
  return (
    <Modal className="cart">
      <h2>Your Cart</h2>
      <ul>
        {ctx.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <p className="cart-total">S$ {cartTotal}</p>
      <p className="modal-actions">
        <button>Close</button>
        <button>CheckOut</button>
      </p>
    </Modal>
  );
}

export default Cart;
