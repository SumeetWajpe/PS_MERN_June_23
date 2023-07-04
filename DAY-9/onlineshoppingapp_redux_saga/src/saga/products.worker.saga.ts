import axios, { Axios } from "axios";
import { ProductModel } from "../models/product.model";
import {
  addNewProduct,
  deleteProduct,
  setAllProducts,
} from "../redux/reducers/products.reducer";
import { call, put, retry } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { PostModel } from "../models/post.model";
import { PayloadAction } from "@reduxjs/toolkit";

function GetAllProducts() {
  return axios.get<AxiosResponse<ProductModel[]>>(
    "http://localhost:3005/products",
  );
}

function DeleteAProduct(id: number) {
  return axios.delete("http://localhost:3005/products/" + id);
}

function AddANewProduct(newProduct: ProductModel) {
  return axios.post("http://localhost:3005/products", newProduct);
}

// Worker Saga
export function* fetchProducts() {
  try {
    const response: AxiosResponse<ProductModel[]> = yield call(GetAllProducts); // calls GetAllProducts

    if (response.status == 200) {
      yield put(setAllProducts(response.data)); // put - dispatch the
    }
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

export function* deleteProductFromServer(action: PayloadAction<number>) {
  try {
    let response: AxiosResponse = yield call(DeleteAProduct, action.payload);
    if (response.status == 200) {
      yield put(deleteProduct(action.payload));
    }
  } catch (error) {}
}

export function* addNewProductToServer(action: PayloadAction<ProductModel>) {
  // logic async operation
  try {
    let response: AxiosResponse = yield call(AddANewProduct, action.payload);
    if (response.status == 201) {
      yield put(addNewProduct(action.payload));
    }
  } catch (error) {}
}
