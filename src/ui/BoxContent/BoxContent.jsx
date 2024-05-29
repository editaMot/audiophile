import { useParams } from "react-router-dom";
import useProductSet from "../../hooks/useProductSet";
import "./BoxContent.scss";

const BoxContent = () => {
  const { productId } = useParams();
  const { isLoading, data, error } = useProductSet(productId);

  return (
    <ul className="box-content">
      {data.map((item) => (
        <li key={item.item} className="box-content__item">
          <span className="box-content__quantity">{item.item_quantity}x</span>
          {item.item}
        </li>
      ))}
    </ul>
  );
};

export default BoxContent;
