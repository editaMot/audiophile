import { useLocation, useNavigate } from "react-router-dom";
import confirmMark from "../../assets/desktop/icon-order-confirmation.svg";
import Button from "../Button";
import ShortSummary from "../ShortSummary/ShortSummary";
import "./OrderConfirmation.scss";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const orderData = location.state.orderData;
  localStorage.removeItem("order-id");

  return (
    <div className="order-confirmation">
      <img src={confirmMark} alt="Order confirmed" />
      <h3>
        Thank you <br /> for your order
      </h3>
      <p>
        Order number #{orderData[0].id}
        <br />
        You will receive an email confirmation shortly.
      </p>
      <ShortSummary orderData={orderData} />
      <Button onClick={() => navigate("/")}>Back to home</Button>
    </div>
  );
};

export default OrderConfirmation;
