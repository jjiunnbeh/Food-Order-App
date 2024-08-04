import { BsCartPlusFill } from "react-icons/bs";

function FoodCard({ item }) {
  return (
    <li className="menu-item">
      <article>
        <img src={item.imageURL} alt={item.name} />
        <div>
          <h3>{item.name}</h3>
          <p className="item-description">{item.description}</p>
          <p className="item-price">Price: S${item.price}</p>
          <p className="item-action">
            <button>
              <BsCartPlusFill />
            </button>
          </p>
        </div>
      </article>
    </li>
  );
}

export default FoodCard;
