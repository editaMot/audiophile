import { useDispatch } from "react-redux";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../../redux/cartSlice";
import "./Quantity.scss";

const Quantity = ({ quantity, small, productId }) => {
  const dispatch = useDispatch();

  return (
    <div className={`quantity ${small && "quantity--small"}`}>
      <button
        className="quantity__btn"
        onClick={() => dispatch(decreaseItemQuantity(productId))}
      >
        -
      </button>
      <span className="quantity__number">{quantity}</span>
      <button
        className="quantity__btn"
        onClick={() => dispatch(increaseItemQuantity(productId))}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
