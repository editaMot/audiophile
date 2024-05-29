import NotFound from "../../ui/NotFound";
import OrderConfirmation from "../../ui/OrderConfirmation/OrderConfirmation";

const Order = () => {
  if (!localStorage.getItem("order-id")) return <NotFound />;

  return (
    <>
      <OrderConfirmation />
    </>
  );
};

export default Order;
