import React from "react";
import { ProductModel } from "../../models/product.model";

type ProductProps = {
  productdetails: ProductModel;
};

export class ProductComponent extends React.Component<ProductProps> {
  render(): React.ReactNode {
    return (
      <div className="col-md-3 my-1">
        <div className="card">
          <img
            src={this.props.productdetails.imageUrl}
            className="card-img-top"
            alt={this.props.productdetails.title}
            height="150px"
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.productdetails.title}</h5>
            <p className="card-text m-0">{this.props.productdetails.price}</p>
            <p className="card-text m-0">{this.props.productdetails.rating}</p>
            <button className="btn btn-outline-primary">
              {this.props.productdetails.likes}{" "}
              <i className="fa fa-thumbs-up" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
