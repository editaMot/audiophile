import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productSetReducer from "./productSetSlicer";
import productReducer from "./productSlicer";
import productsReducer from "./productsSlicer";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    product: productReducer,
    productSet: productSetReducer,
    cart: cartReducer,
  },
});
