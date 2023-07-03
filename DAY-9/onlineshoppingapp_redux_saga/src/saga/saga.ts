import { call, put, takeLatest } from "redux-saga/effects";
import { SagaActions } from "./saga.actions";
import { fetchProducts } from "./products.worker.saga";


// root Saga (watcher Saga)
export default function* rootSaga() {
  yield takeLatest(SagaActions.FETCH_PRODUCTS_ASYNC, fetchProducts);
}
