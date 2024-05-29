import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  deleteItem,
  getCurrentQuantityById,
} from "../../redux/cartSlice";
import Button from "../Button";
import Quantity from "../Quantity";
import "./AddToCart.scss";

const AddToCart = ({ product }) => {
  const dispatch = useDispatch();
  const { id, name, shortName, image, price } = product;
  const currentQuantity = useSelector(getCurrentQuantityById(id));

  const isInCart = currentQuantity > 0;

  const handleAddToCart = () => {
    const newItem = {
      id,
      name,
      shortName,
      quantity: 1,
      price,
      totalPrice: price * 1,
      image,
    };
    dispatch(addItem(newItem));
    toast.success(`${newItem.shortName} added to your cart`);
  };

  return (
    <div className="add-to-cart">
      <span className="add-to-cart__price">$ {price}</span>
      <div className="add-to-cart__amount">
        {isInCart && (
          <Quantity productId={id} small={true} quantity={currentQuantity} />
        )}
        {!isInCart ? (
          <Button onClick={handleAddToCart}>Add to Cart</Button>
        ) : (
          <Button
            onClick={() => {
              dispatch(deleteItem(id));
              toast.error(`${shortName} removed from your cart`);
            }}
          >
            Remove from Cart
          </Button>
        )}
      </div>
    </div>
  );
};

export default AddToCart;
