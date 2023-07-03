import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductModel } from "../../models/product.model";

export type ProductRequest = {
  error: string;
  loading: boolean;
  products: ProductModel[];
};
let initialState: ProductRequest = { error: "", loading: true, products: [] };

// let initialState: ProductModel[] = [];

export const getProductsAsync = createAsyncThunk(
  "products/getProductAsync",
  async () => {
    try {
      let res = await fetch("http://localhost:3005/products");
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Something went wrong !");
      }
    } catch (error) {
      //   Promise.reject("Something went wrong !");
    }
  },
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    incrementLikes: (store, action: PayloadAction<number>) => {
      // console.log(action);
      // console.log("Within Products Reducer !");
      let id = action.payload;
      // change biz logic
      let index = store.products.findIndex(product => product.id === id);
      store.products[index].likes++; // Immer library
      return store;
    },
    deleteProduct: (store, action: PayloadAction<number>) => {
      let id = action.payload; // passed from the UI
      store.products = store.products.filter(
        (product: ProductModel) => product.id !== id,
      );
      return store;
    },
    addNewProduct: (store, action: PayloadAction<ProductModel>) => {
      store.products.push(action.payload);
      return store;
    },
  },
  extraReducers: builder => {
    builder.addCase(getProductsAsync.fulfilled, (store, { payload }) => {
      console.log(payload);
      store.products = payload;
      store.loading = false;
      return store;
    });
  },
});

export const { incrementLikes, deleteProduct, addNewProduct } =
  productsSlice.actions;
export default productsSlice.reducer;
