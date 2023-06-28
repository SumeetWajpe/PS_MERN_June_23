import { createSlice } from "@reduxjs/toolkit";
import { ProductModel } from "../../models/product.model";

let initialState: ProductModel[] = [];
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    incrementLikes: (store, action) => {
      // change biz logic
      return store;
    },
  },
});

export const { incrementLikes } = productsSlice.actions;
export default productsSlice.reducer;
