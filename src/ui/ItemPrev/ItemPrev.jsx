import Amount from "../Amount/Amount";
import Quantity from "../Quantity";
import "./ItemPrev.scss";

const ItemPrev = ({ item, addToCart = false }) => {
  const { id, shortName, price, image, quantity } = item;

  if (!item) return null;

  return (
    <div className="item-preview">
      <div className="item-preview__item">
        <img src={image} alt="headphones" />
        <div className="item-preview__details">
          <h6>{shortName}</h6>
          <span>$ {price}</span>
        </div>
      </div>
      {addToCart ? (
        <Quantity small={true} productId={id} quantity={quantity} />
      ) : (
        <Amount amount={quantity} />
      )}
    </div>
  );
};

export default ItemPrev;
