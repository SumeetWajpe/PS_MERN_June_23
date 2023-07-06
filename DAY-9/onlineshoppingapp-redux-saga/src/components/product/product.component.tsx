import { FC } from "react";
import { ProductModel } from "../../models/product.model";
import { Rating } from "../rating/rating.component";
import { useDispatch } from "react-redux";
import {
  deleteProduct,
  incrementLikes,
} from "../../redux/reducers/products.reducer";
import { addProductToCart } from "../../redux/reducers/cart.reducer";
import { Title } from "../atoms/title/title.component";
import { Link } from "react-router-dom";
import { SagaActions } from "../../saga/saga.actions";

type ProductProps = {
  productdetails: ProductModel;
};

export const ProductComponent: FC<ProductProps> = (props: ProductProps) => {
  let dispatch = useDispatch();
  return (
    <>
      <div className="col-md-3 my-1">
        <div className="card">
          <Link to={`/productdetails/${props.productdetails.id}`}>
            <img
              src={props.productdetails.imageUrl}
              className="card-img-top"
              alt={props.productdetails.title}
              height="150px"
            />
          </Link>
          <div className="card-body">
            {/* <h5 className="card-title m-0">{props.productdetails.title}</h5> */}
            <Title>
              <h5>{props.productdetails.title}</h5>
            </Title>
            <p className="card-text m-0">
              {" "}
              <Rating
                numberofstars={props.productdetails.rating}
                color="darkorange"
              />
            </p>

            <p className="card-text m-0">₹.{props.productdetails.price}</p>
            <div className="d-flex align-items-center">
              <button
                className="btn btn-outline-primary"
                onClick={() =>
                  dispatch(incrementLikes(props.productdetails.id))
                }
                // onClick={() =>
                //   dispatch({
                //     type: "products/incrementLikes",
                //     payload: props.productdetails.id,
                //   })
                // }
              >
                {props.productdetails.likes}
                <i className="fa fa-thumbs-up" aria-hidden="true"></i>
              </button>
              <button
                className="btn btn-outline-danger mx-1"
                onClick={() =>
                  dispatch({
                    type: SagaActions.DELETE_A_PRODUCT,
                    payload: props.productdetails.id,
                  })
                }
              >
                <i className="fa-solid fa-trash"></i>
              </button>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (e.target.checked) {
                      dispatch(addProductToCart(props.productdetails));
                    } else {
                    }
                  }}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Add to cart
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
