import { FC, useEffect } from "react";
import { ProductModel } from "../../models/product.model";
import { ProductComponent } from "../product/product.component";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../../redux/store/store";
import { SagaActions } from "../../saga/saga.actions";

export const ListOfProducts: FC = () => {
  const products: ProductModel[] = useSelector(
    (store: AppState) => store.products,
  );
  let dispatch = useDispatch<AppDispatch>();
  // useEffect(() => {
  // }, []);

  return (
    <>
      <header>
        <h1> List Of Products</h1>
      </header>
      <button
        onClick={() => {
          dispatch({ type: SagaActions.FETCH_PRODUCTS_ASYNC });
        }}
      >
        Get Products !
      </button>
      <div className="row">
        {products?.map((product: ProductModel) => (
          <ProductComponent productdetails={product} key={product.id} />
        ))}
      </div>
    </>
  );
};
