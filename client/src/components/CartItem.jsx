import { CartContext } from "../store/CartContext";
import { useContext } from "react";
function CartItem({name, quantity, price, onIncrease, onDecrease})
{
    const cartCtx = useContext(CartContext);
    
    return(
        <li className="cart-item">
            <p>
                {name} - {quantity} X  S${price}
            </p>
            <p className="cart-item-actions">
                <button onClick={onDecrease}>-</button>
                <span>{quantity}</span>
                <button onClick={onIncrease}>+</button>
            </p>
        </li>

    );

}

export default CartItem;