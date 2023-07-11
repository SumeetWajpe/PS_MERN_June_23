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
import { AuthModel } from "../models/auth.model";

function GetAllProducts(token: string) {
  return axios.post<AxiosResponse<ProductModel[]>>(
    "http://localhost:5555/products",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
}

function DeleteAProduct(id: number) {
  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU3VtZWV0IiwibGFzdExvZ2luIjoiTW9uZGF5IDI1dGgiLCJpYXQiOjE2ODkwNzQ4MzEsImV4cCI6MTY4OTI0NzYzMX0.0MznuCyP8N2g9XasjN6u9CV5aj-oJYvwJ-nk2Bi_Rjg";
  // Add token here as well
  return axios.delete("http://localhost:5555/products/product/" + id, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

function AddANewProduct(newProduct: ProductModel) {
  // Add token here as well
  return axios.post("http://localhost:5555/products/newproduct", newProduct);
}

// Worker Saga
export function* fetchProducts(action: PayloadAction<string>) {
  try {
    const response: AxiosResponse<ProductModel[]> = yield call(
      GetAllProducts,
      action.payload,
    ); // calls GetAllProducts

    if (response.status == 200) {
      yield put(setAllProducts(response.data)); // put - dispatch the action (reducer with payload)
    }
  } catch (error) {
    console.log(error); // dipatch an action with error
  }
}

// export function* fetchProductsWithRetry() {
//   try {
//     let duration = 1000;
//     let response: AxiosResponse<ProductModel[]> = yield retry(
//       3,
//       duration * 10,
//       GetAllProducts,
//     );
//     yield put(setAllProducts(response.data));
//   } catch (error) {}
// }

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
