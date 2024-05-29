import "./Price.scss";

const Price = ({ title, amount, grandTotal }) => {
  return (
    <div className={`price ${grandTotal && "price--total"}`}>
      <span className="price__title">{title}</span>
      <span
        className={`price__amount ${grandTotal && `price__amount--primary`}`}
      >
        $ {amount}
      </span>
    </div>
  );
};

export default Price;
