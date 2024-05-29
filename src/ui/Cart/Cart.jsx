import { useState } from "react";
import { useSelector } from "react-redux";
import CartSvg from "../../assets/desktop/icon-cart.svg";
import { getTotalCartQuantity } from "../../redux/cartSlice";
import CartPreview from "../CartPreview";
import Modal from "../Modal";
import "./Cart.scss";

const Cart = () => {
  const [isCartPrevOpen, setIsCartPrevOpen] = useState(false);
  const quantity = useSelector(getTotalCartQuantity);

  const toggleCartClick = () => {
    setIsCartPrevOpen(!isCartPrevOpen);
  };

  const closeCartOnClick = () => setIsCartPrevOpen(false);

  return (
    <div className="cart">
      <Modal>
        <Modal.Open opens="cart-preview">
          <img
            src={CartSvg}
            alt="Cart icon"
            className="cart__icon"
            onClick={toggleCartClick}
            role="button"
          />
        </Modal.Open>
        {quantity && <span className="cart__amount">{quantity}</span>}
        <Modal.Window name="cart-preview">
          <CartPreview handleCartClose={closeCartOnClick} />
        </Modal.Window>
      </Modal>
    </div>
  );
};

export default Cart;
