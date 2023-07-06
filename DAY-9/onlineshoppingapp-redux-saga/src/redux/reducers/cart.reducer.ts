import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductModel } from "../../models/product.model";

let initialState: ProductModel[] = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (store, action: PayloadAction<ProductModel>) => {
      let productToBeAdded = action.payload;
      store.push(productToBeAdded);
      return store;
    },
    removeProductFromCart: (store, action: PayloadAction<number>) => {},
  },
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;
export default cartSlice.reducer;
