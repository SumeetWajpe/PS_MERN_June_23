import { FC, useEffect, useState } from "react";
import { ProductModel } from "../../models/product.model";
import { ProductComponent } from "../product/product.component";
import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS } from "../../graphql/querries";
export const ListOfProducts: FC = () => {
  const { data, loading, error } = useQuery(GET_ALL_PRODUCTS);

  return (
    <>
      <header>
        <h1> List Of Products</h1>
      </header>

      {loading ? (
        "Loading.."
      ) : (
        <div className="row">
          {data?.products?.map((product: ProductModel) => (
            <ProductComponent productdetails={product} key={product.id} />
          ))}
        </div>
      )}
    </>
  );
};
