import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProductSet } from "../services/apiProducts";

export const fetchProductSet = createAsyncThunk(
  "fetchProductSet",
  getProductSet
);

const productSetSlice = createSlice({
  name: "productSet",
  initialState: {
    isLoading: false,
    data: [],
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductSet.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchProductSet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchProductSet.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export default productSetSlice.reducer;
