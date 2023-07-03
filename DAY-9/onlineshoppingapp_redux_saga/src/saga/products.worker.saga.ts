import axios from "axios";
import { ProductModel } from "../models/product.model";
import { setAllProducts } from "../redux/reducers/products.reducer";
import { call, put } from "redux-saga/effects";

type Response = {
  data: any;
  config: any;
  headers: any;
  status: number;
  statusText: string;
  request: any;
};
function GetAllProducts() {
  return axios.get<ProductModel[]>("http://localhost:3005/products");
}

// Worker Saga
export function* fetchProducts() {
  try {
    const response: Response = yield call(GetAllProducts);
    yield put(setAllProducts(response.data));
  } catch (error) {
    console.log(error); // dipatch an action with error
  }
}
