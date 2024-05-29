import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCart } from "../../redux/cartSlice";
import CreateOrder from "../../ui/CreateOrder/CreateOrder";

const Checkout = () => {
  const cart = useSelector(getCart);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("order-id") && cart.length === 0) navigate("/");
  }, [cart.length, navigate]);

  return <CreateOrder />;
};

export default Checkout;
