import { BsCartPlusFill } from "react-icons/bs";
import { CartContext } from "../store/CartContext.jsx";
import { useContext } from "react";

function FoodCard({ item }) {
    const ctx = useContext(CartContext);
    const handleClick= ()=>
    {
        ctx.addToCart(item);
    }
  return (
    <li className="menu-item">
      <article>
        <img src={item.imageURL} alt={item.name} />
        <div>
          <h3>{item.name}</h3>
          <p className="item-description">{item.description}</p>
          <p className="item-price">Price: S${item.price}</p>
          <p className="item-action">
            <button onClick={handleClick}>
                {/*This is an add to cart icon */}
              <BsCartPlusFill /> 
            </button>
          </p>
        </div>
      </article>
    </li>
  );
}

export default FoodCard;
