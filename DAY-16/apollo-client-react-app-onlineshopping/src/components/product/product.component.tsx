import { FC } from "react";
import { ProductModel } from "../../models/product.model";
import { Rating } from "../rating/rating.component";
import { useMutation } from "@apollo/client";
import { DELETE_PRODUCT_MUTATION } from "../../graphql/mutations";
import { GET_ALL_PRODUCTS } from "../../graphql/querries";

// import { Title } from "../atoms/title/title.component";
// import { Link } from "react-router-dom";

type ProductProps = {
  productdetails: ProductModel;
};

export const ProductComponent: FC<ProductProps> = (props: ProductProps) => {
  let [deleteAProduct, { error, data, loading }] = useMutation(
    DELETE_PRODUCT_MUTATION,
    {
      variables: { deleteProductId: props.productdetails.id },
      refetchQueries: [{ query: GET_ALL_PRODUCTS }], // it refetches data from server & updates the cache in the process
    },
  );
  return (
    <>
      <div className="col-md-3 my-1">
        <div className="card">
          {/* <Link to={`/dashboard/productdetails/${props.productdetails.id}`}> */}
          <img
            src={props.productdetails.imageUrl}
            className="card-img-top"
            alt={props.productdetails.title}
            height="150px"
          />
          {/* </Link> */}
          <div className="card-body">
            {/* <h5 className="card-title m-0">{props.productdetails.title}</h5> */}

            <h5>{props.productdetails.title}</h5>

            <p className="card-text m-0">
              {" "}
              <Rating
                numberofstars={props.productdetails.rating}
                color="darkorange"
              />
            </p>

            <p className="card-text m-0">₹.{props.productdetails.price}</p>
            <div className="d-flex align-items-center">
              <button className="btn btn-outline-primary">
                {props.productdetails.likes}
                <i className="fa fa-thumbs-up" aria-hidden="true"></i>
              </button>
              <button
                className="btn btn-outline-danger mx-1"
                onClick={() => deleteAProduct()}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
