import React from "react";
import { ProductModel } from "../../models/product.model";

type ProductProps = {
  productdetails: ProductModel;
};

export class ProductComponent extends React.Component<ProductProps> {
  render(): React.ReactNode {
    return (
      <div className="col-md-3">
        <h3>{this.props.productdetails.title}</h3>
      </div>
    );
  }
}
