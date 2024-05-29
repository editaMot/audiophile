import { useState } from "react";
import ItemPrev from "../ItemPrev";
import Price from "../Price";
import "./ShortSummary.scss";

const ShortSummary = ({ orderData }) => {
  const { grandTotal, items } = orderData[0];
  const diffItemQuantityInCart = items.length;
  const [showAllItems, setShowAllItems] = useState(false);

  const handleItemDisplay = () => setShowAllItems(true);

  return (
    <div className="short-summary">
      <div className="short-summary__items">
        {!showAllItems && <ItemPrev item={items[0]} />}
        {!showAllItems && diffItemQuantityInCart > 1 && (
          <span className="short-summary__line" onClick={handleItemDisplay}>
            and {diffItemQuantityInCart - 1} other item(s)
          </span>
        )}
        {showAllItems && (
          <>
            {items.map((item) => (
              <ItemPrev item={item} key={item.id} />
            ))}
          </>
        )}
      </div>
      <div className="short-summary__price">
        <Price amount={grandTotal} title="Grand Total" grandTotal="white" />
      </div>
    </div>
  );
};

export default ShortSummary;
