import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "../services/apiProducts";

export const fetchProducts = createAsyncThunk("fetchProducts", getProducts);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    isLoading: false,
    data: [],
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export default productsSlice.reducer;
