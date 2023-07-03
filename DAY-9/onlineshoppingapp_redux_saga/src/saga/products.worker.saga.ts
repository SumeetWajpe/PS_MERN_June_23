import axios, { Axios } from "axios";
import { ProductModel } from "../models/product.model";
import { setAllProducts } from "../redux/reducers/products.reducer";
import { call, put, retry } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { PostModel } from "../models/post.model";

function GetAllProducts() {
  return axios.get<AxiosResponse<ProductModel[]>>(
    "http://localhost:3005/products",
  );
}

// Worker Saga
export function* fetchProducts() {
  try {
    const response: AxiosResponse<ProductModel[]> = yield call(GetAllProducts); // calls GetAllProducts
    yield put(setAllProducts(response.data)); // put - dispatch the
  } catch (error) {
    console.log(error); // dipatch an action with error
  }
}

export function* fetchProductsWithRetry() {
  try {
    let duration = 1000;
    let response: AxiosResponse<ProductModel[]> = yield retry(
      3,
      duration * 10,
      GetAllProducts,
    );
    yield put(setAllProducts(response.data));
  } catch (error) {}
}
