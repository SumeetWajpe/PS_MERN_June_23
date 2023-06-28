import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../reducers/products.reducer";
import postsReducer from "../reducers/posts.reducer";
const store = configureStore({
  reducer: {
    products: productsReducer,
    posts: postsReducer,
  },
});

export default store;
