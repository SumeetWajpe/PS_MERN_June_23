import { configureStore } from "@reduxjs/toolkit";
import products from "../reducers/products.reducer";
import posts from "../reducers/posts.reducer";
import cart from "../reducers/cart.reducer";
import createSagaMiddlware from "redux-saga";
import rootSaga from "../../saga/saga";
import user from "../reducers/user.reducer";
const sagaMiddleware = createSagaMiddlware();
const store = configureStore({
  reducer: {
    products,
    posts,
    cart,
    user,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat([sagaMiddleware]),
});

sagaMiddleware.run(rootSaga);

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
