import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "../ui/AppLayout/AppLayout";

const Checkout = lazy(() => import("../pages/Checkout"));
const Earphones = lazy(() => import("../pages/Earphones"));
const Headphones = lazy(() => import("../pages/Headphones"));
const Home = lazy(() => import("../pages/Home"));
const Product = lazy(() => import("../pages/Product"));
const Speakers = lazy(() => import("../pages/Speakers"));
const Order = lazy(() => import("../pages/Order"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));

const RoutesConfig = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" index element={<Home />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="earphones" element={<Earphones />} />
        <Route path="product/:productId" element={<Product />} />
        <Route path="headphones" element={<Headphones />} />
        <Route path="speakers" element={<Speakers />} />
        <Route path="order/:orderId" element={<Order />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default RoutesConfig;
