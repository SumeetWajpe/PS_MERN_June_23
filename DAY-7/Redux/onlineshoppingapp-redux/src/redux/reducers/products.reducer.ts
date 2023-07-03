import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductModel } from "../../models/product.model";

export type ProductRequest = {
  error: string;
  loading: boolean;
  products: ProductModel[];
};
let initialState: ProductRequest = { error: "", loading: true, products: [] };

// let initialState: ProductModel[] = [];
type Error = {
  message: string;
};
export const getProductsAsync = createAsyncThunk(
  "products/getProductAsync",
  async (_, { rejectWithValue }) => {
    try {
      let res = await fetch("http://localhost:3005/products");
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Something went wrong  - " + res.status + "!");
      }
    } catch (error: any) {
      return rejectWithValue(error.message);
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
    builder.addCase(
      getProductsAsync.rejected,
      (store, { payload }: { payload: any }) => {
        console.log(payload);
        store.products = [];
        store.loading = false;
        store.error = payload;
        return store;
      },
    );
  },
});

export const { incrementLikes, deleteProduct, addNewProduct } =
  productsSlice.actions;
export default productsSlice.reducer;
