import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProductById } from "../services/apiProducts";

export const fetchProductById = createAsyncThunk(
  "fetchProductById",
  async (id) => await getProductById(id)
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    data: {},
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchProductById.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export default productSlice.reducer;
