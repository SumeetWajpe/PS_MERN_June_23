import { call, put, takeLatest } from "redux-saga/effects";
import { SagaActions } from "./saga.actions";
import {
  addNewProductToServer,
  deleteProductFromServer,
  fetchProducts,
  fetchProductsWithRetry,
} from "./products.worker.saga";

// root Saga (watcher Saga)
export default function* rootSaga() {
  yield takeLatest(SagaActions.FETCH_PRODUCTS_ASYNC, fetchProducts);
  //   yield takeLatest(SagaActions.FETCH_PRODUCTS_ASYNC, fetchProductsWithRetry);
  yield takeLatest(SagaActions.DELETE_A_PRODUCT, deleteProductFromServer);
  yield takeLatest(SagaActions.ADD_NEW_PRODUCT, addNewProductToServer);
}
