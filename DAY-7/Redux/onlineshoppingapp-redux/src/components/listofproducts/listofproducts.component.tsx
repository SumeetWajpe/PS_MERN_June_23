import { FC, useEffect } from "react";
import { ProductModel } from "../../models/product.model";
import { ProductComponent } from "../product/product.component";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../../redux/store/store";
import {
  ProductRequest,
  getProductsAsync,
} from "../../redux/reducers/products.reducer";

export const ListOfProducts: FC = () => {
  const productRequest: ProductRequest = useSelector(
    (store: AppState) => store.products,
  );
  let dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getProductsAsync());
  }, []);

  if (productRequest.error != "") {
    return <h1 style={{ color: "red" }}>{productRequest.error}</h1>;
  }

  return (
    <>
      <header>
        <h1> List Of Products</h1>
      </header>

      <div className="row">
        {productRequest?.loading
          ? "Loading.."
          : productRequest?.products?.map((product: ProductModel) => (
              <ProductComponent productdetails={product} key={product.id} />
            ))}
      </div>
    </>
  );
};
