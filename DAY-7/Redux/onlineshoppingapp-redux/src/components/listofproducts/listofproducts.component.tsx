import React, { FC, useEffect, useState } from "react";
import { ProductModel } from "../../models/product.model";
import { ProductComponent } from "../product/product.component";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store/store";

export const ListOfProducts: FC = () => {
  const products = useSelector((store: AppState) => store.products);

  return (
    <>
      <header>
        <h1> List Of Products</h1>
      </header>

      <div className="row">
        {products.map((product: ProductModel) => (
          <ProductComponent productdetails={product} key={product.id} />
        ))}
      </div>
    </>
  );
};
