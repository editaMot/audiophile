import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  clearCart,
  getCart,
  getTotalCartPrice,
  getTotalCartQuantity,
} from "../../redux/cartSlice";
import Button from "../Button";
import ItemPrev from "../ItemPrev";
import Price from "../Price";
import "./CartPreview.scss";

const CartPreview = ({ handleCartClose }) => {
  const cart = useSelector(getCart);
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  return (
    <div className="cart-preview">
      {!totalCartQuantity ? (
        <p className="cart-preview__empty">Your cart is empty</p>
      ) : (
        <>
          <div className="cart-preview__head">
            <span className="cart-preview__cart">
              CART ({totalCartQuantity})
            </span>
            <Button kind="text-lower" onClick={() => dispatch(clearCart())}>
              Remove All
            </Button>
          </div>
          <div className="cart-preview__items">
            {cart.map((item, index) => (
              <ItemPrev item={item} addToCart={true} key={item.name + index} />
            ))}
          </div>
          <Price amount={totalCartPrice} title="Total" />
          <Button
            onClick={() => {
              handleCartClose();
              navigate("/checkout");
            }}
          >
            Chekout
          </Button>
        </>
      )}
    </div>
  );
};

export default CartPreview;
