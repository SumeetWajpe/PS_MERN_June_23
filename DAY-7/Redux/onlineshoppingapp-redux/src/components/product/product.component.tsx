import React, { FC, useState } from "react";
import { ProductModel } from "../../models/product.model";
import { Rating } from "../rating/rating.component";

type ProductProps = {
  productdetails: ProductModel;
};

export const ProductComponent: FC<ProductProps> = (props: ProductProps) => {
  return (
    <>
      <div className="col-md-3 my-1">
        <div className="card">
          {/* <Link to={`/productdetails/${props.productdetails.id}`}> */}
          <img
            src={props.productdetails.imageUrl}
            className="card-img-top"
            alt={props.productdetails.title}
            height="150px"
          />
          {/* </Link> */}
          <div className="card-body">
            <h5 className="card-title m-0">{props.productdetails.title}</h5>
            <p className="card-text m-0">
              {" "}
              <Rating
                numberofstars={props.productdetails.rating}
                color="darkorange"
              />
            </p>

            <p className="card-text m-0">₹.{props.productdetails.price}</p>
            <button className="btn btn-outline-primary">
              {props.productdetails.likes}
              <i className="fa fa-thumbs-up" aria-hidden="true"></i>
            </button>
            <button className="btn btn-outline-danger mx-1">
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
