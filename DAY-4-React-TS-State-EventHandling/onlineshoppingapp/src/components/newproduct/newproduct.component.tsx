import React from "react";

export class NewProduct extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <h1>New Product</h1>
        <div className="d-flex justify-content-center align-items-center">
          <form>
            <div className="row my-1">
              <div className="col-md-4">
                <label htmlFor="txtProductId">Id : </label>
              </div>
              <div className="col-md-4">
                <input type="number" id="txtProductId" />
              </div>
            </div>
            <div className="row my-1">
              <div className="col-md-4">
                <label htmlFor="txtProductTitle">Title : </label>
              </div>
              <div className="col-md-4">
                <input type="text" id="txtProductTitle" />
              </div>
            </div>
            <div className="row my-1">
              <div className="col-md-4">
                <label htmlFor="txtProductPrice">Price : </label>
              </div>
              <div className="col-md-4">
                <input type="number" id="txtProductPrice" />
              </div>
            </div>
            <div className="row my-1">
              <div className="col-md-4">
                <label htmlFor="txtProductRating">Rating : </label>
              </div>
              <div className="col-md-4">
                <input type="number" id="txtProductRating" />
              </div>
            </div>
            <div className="row my-1">
              <div className="col-md-4">
                <label htmlFor="txtProductLikes">Likes : </label>
              </div>
              <div className="col-md-4">
                <input type="number" id="txtProductLikes" />
              </div>
            </div>
            <div className="row my-1">
              <div className="col-md-4">
                <label htmlFor="txtProductImageUrl">Image : </label>
              </div>
              <div className="col-md-4">
                <input type="number" id="txtProductImageUrl" />
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
