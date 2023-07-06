import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductModel } from "../../models/product.model";

let initialState: ProductModel[] = [];
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    incrementLikes: (store, action: PayloadAction<number>) => {
      // console.log(action);
      // console.log("Within Products Reducer !");
      let id = action.payload;
      // change biz logic
      let index = store.findIndex(product => product.id === id);
      store[index].likes++; // Immer library
      return store;
    },
    deleteProduct: (store, action: PayloadAction<number>) => {
      let id = action.payload; // passed from the UI
      store = store.filter((product: ProductModel) => product.id !== id);
      return store;
    },
    addNewProduct: (store, action: PayloadAction<ProductModel>) => {
      store.push(action.payload);
      return store;
    },
    setAllProducts: (store, action: PayloadAction<ProductModel[]>) => {
      store = action.payload;
      return store;
    },
  },
});

export const { incrementLikes, deleteProduct, addNewProduct, setAllProducts } =
  productsSlice.actions;
export default productsSlice.reducer;
