import React from "react";
import { ProductModel } from "../../models/product.model";

type ProductProps = {
  productdetails: ProductModel;
};

export class ProductComponent extends React.Component<ProductProps> {
  render(): React.ReactNode {
    return (
      <div className="col-md-3">
        <div className="card">
          <img
            src={this.props.productdetails.imageUrl}
            className="card-img-top"
            alt={this.props.productdetails.title}
            height="150px"
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.productdetails.title}</h5>
            <p className="card-text">{this.props.productdetails.price}</p>
            <p className="card-text">{this.props.productdetails.rating}</p>
            <p className="card-text">{this.props.productdetails.likes}</p>
          </div>
        </div>
      </div>
    );
  }
}
