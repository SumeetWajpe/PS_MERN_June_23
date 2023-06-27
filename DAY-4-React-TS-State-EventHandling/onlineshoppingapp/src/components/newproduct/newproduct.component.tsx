import React from "react";
import { ProductModel } from "../../models/product.model";

type NewProductProps = {
  addNewProduct?: (newProduct: ProductModel) => void;
};

export class NewProduct extends React.Component<NewProductProps> {
  state = { id: 0, title: "", price: 0, likes: 0, rating: 0, imageUrl: "" };
  render(): React.ReactNode {
    console.log("Render - New Product !");
    return (
      <div>
        <h1>New Product</h1>
        <div className="d-flex justify-content-center align-items-center">
          <form
            onSubmit={e => {
              e.preventDefault(); // prevent the browser from reloading the page
            }}
          >
            <div className="row my-1">
              <div className="col-md-4">
                <label htmlFor="txtProductId">Id : </label>
              </div>
              <div className="col-md-4">
                <input
                  type="number"
                  id="txtProductId"
                  onChange={
                    e => this.setState({ id: parseInt(e.target.value) }) // converts string to number
                  }
                />
              </div>
            </div>
            <div className="row my-1">
              <div className="col-md-4">
                <label htmlFor="txtProductTitle">Title : </label>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  id="txtProductTitle"
                  onChange={e => {
                    this.setState({ title: e.target.value });
                  }}
                />
              </div>
            </div>
            <div className="row my-1">
              <div className="col-md-4">
                <label htmlFor="txtProductPrice">Price : </label>
              </div>
              <div className="col-md-4">
                <input
                  type="number"
                  id="txtProductPrice"
                  onChange={e => {
                    this.setState({ price: parseInt(e.target.value) });
                  }}
                />
              </div>
            </div>
            <div className="row my-1">
              <div className="col-md-4">
                <label htmlFor="txtProductRating">Rating : </label>
              </div>
              <div className="col-md-4">
                <input
                  type="number"
                  id="txtProductRating"
                  onChange={e => {
                    this.setState({ rating: parseInt(e.target.value) });
                  }}
                />
              </div>
            </div>
            <div className="row my-1">
              <div className="col-md-4">
                <label htmlFor="txtProductLikes">Likes : </label>
              </div>
              <div className="col-md-4">
                <input
                  type="number"
                  id="txtProductLikes"
                  onChange={e => {
                    this.setState({ likes: parseInt(e.target.value) });
                  }}
                />
              </div>
            </div>
            <div className="row my-1">
              <div className="col-md-4">
                <label htmlFor="txtProductImageUrl">Image : </label>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  id="txtProductImageUrl"
                  onChange={e => {
                    this.setState({ imageUrl: e.target.value });
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-9">
                <button className="btn btn-success">
                  Add new product{" "}
                  <i className="fa fa-plus-circle" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
