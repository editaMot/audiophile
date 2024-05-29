import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  clearCart,
  getCart,
  getGrandTotalCartPrice,
  getTotalCartPrice,
} from "../../redux/cartSlice";
import { createOrder } from "../../services/apiOrder";
import { SHIPPING_PRICE, VAT } from "../../utils/constants";
import Button from "../Button";
import Input from "../Input";
import ItemPrev from "../ItemPrev";
import Price from "../Price";
import RadioInput from "../RadioInput";
import "./CreateOrder.scss";

const CreateOrder = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const cart = useSelector(getCart);
  const grandTotal = useSelector(getGrandTotalCartPrice);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const totalVAT = +(totalCartPrice - totalCartPrice / (VAT / 100 + 1)).toFixed(
    2
  );

  const onSubmit = async (data) => {
    const { name, email, phone, address, zipCode, city, country, payment } =
      data;

    const order = {
      name,
      email,
      phone,
      address,
      zipCode,
      city,
      country,
      paymentMethod: payment,
      items: cart,
      grandTotal,
    };

    const orderData = await createOrder(order);
    reset();
    localStorage.setItem("order-id", orderData[0].id);
    navigate(`/order/${orderData[0].id}`, { state: { orderData } });
    dispatch(clearCart());
  };

  return (
    <div className="order-wrapper">
      <Button kind="text-lower" type="button" onClick={() => navigate(-1)}>
        Go Back
      </Button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="order">
          <h3>Checkout</h3>
          <div className="order__billing-inputs">
            <span className="order__heading">Billing details</span>
            <Input
              label="Name"
              id="name"
              error={errors?.name?.message}
              {...register("name", { required: "Enter your name" })}
            />
            <Input
              label="Email Address"
              id="email"
              type="email"
              error={errors?.email?.message}
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please provide a valid email address",
                },
              })}
            />
            <Input
              label="Phone Number"
              id="phone"
              error={errors?.phone?.message}
              {...register("phone", {
                required: "Enter your phone number",
              })}
            />
          </div>
          <div className="order__shipping-inputs">
            <span className="order__heading">Shipping info</span>
            <Input
              label="Address"
              id="address"
              error={errors?.address?.message}
              {...register("address", {
                required: "Enter your street name and home number",
              })}
            />
            <Input
              label="ZIP code"
              id="zipCode"
              error={errors?.zipCode?.message}
              {...register("zipCode", {
                required: "Enter ZIP code",
              })}
            />
            <Input
              label="City"
              id="city"
              error={errors?.city?.message}
              {...register("city", { required: "Enter your City name" })}
            />
            <Input
              label="Country"
              id="country"
              error={errors?.country?.message}
              {...register("country", {
                required: "Enter your Country name",
              })}
            />
          </div>
          <div
            className={`order__payments-inputs ${
              paymentMethod === "e-money" && "order__payments-inputs--emoney"
            }`}
          >
            <span className="order__heading">Payment details</span>
            <span className="order__payments-inputs--label">
              Payment Method
            </span>
            <RadioInput
              label="Cash on Delivery"
              id="cash"
              name="payment"
              value="cash"
              error={errors?.payment?.message}
              onClick={() => setPaymentMethod("cash")}
              {...register("payment", {
                required: "This field is required",
              })}
            />
            <RadioInput
              label="e-Money"
              id="e-money"
              name="payment"
              value="e-money"
              error={errors?.payment?.message}
              onClick={() => setPaymentMethod("e-money")}
              {...register("payment", {
                required: "This field is required",
              })}
            />

            {paymentMethod === "e-money" && (
              <div>
                <Input
                  label="e-Money Number"
                  id="eMoneyNumber"
                  error={errors?.eMoneyNumber?.message}
                  {...register("eMoneyNumber", {
                    required: "Enter your e-Money Number",
                  })}
                />
                <Input
                  label="e-Money PIN"
                  id="eMoneyPin"
                  error={errors?.eMoneyPin?.message}
                  required
                  {...register("eMoneyPin", {
                    required: "Enter your e-Money PIN",
                  })}
                />
              </div>
            )}
          </div>
        </div>

        <div className="summary">
          <h3>Summary</h3>
          <div className="summary__items">
            {cart.map((item, index) => {
              return item ? (
                <ItemPrev item={item} key={item.name + index + item.quantity} />
              ) : null;
            })}
          </div>
          <div className="summary__prices">
            <Price amount={totalCartPrice} title="Total" />
            <Price amount={SHIPPING_PRICE} title="Shipping" />
            <Price amount={totalVAT} title="VAT (included)" />
            <Price amount={grandTotal} title="Grand Total" grandTotal={true} />
          </div>

          <Button type="submit">Continue & Pay</Button>
        </div>
      </form>
    </div>
  );
};

export default CreateOrder;
