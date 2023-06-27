import React, { FC, useState } from "react";
import { ProductModel } from "../../models/product.model";
import { Rating } from "../rating/rating.component";

type ProductProps = {
  productdetails: ProductModel;
};

export const ProductComponent: FC<ProductProps> = (props: ProductProps) => {
  const [currLikes, setCurrLikes] = useState(props.productdetails.likes);
  return (
    <>
      <div className="col-md-3 my-1">
        <div className="card">
          <img
            src={props.productdetails.imageUrl}
            className="card-img-top"
            alt={props.productdetails.title}
            height="150px"
          />
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
            <button
              className="btn btn-outline-primary"
              onClick={() => setCurrLikes(currLikes + 1)}
            >
              {/* {props.productdetails.likes} {this.state.currLikes} */}
              {currLikes}
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

// type ProductProps = {
//   productdetails: ProductModel;
//   deleteAProductFromParent: (productId: number) => void;
// };

// export class ProductComponent extends React.Component<ProductProps> {
//   state = { currLikes: this.props.productdetails.likes };
//   IncrementLikes() {
//     console.log("Within Increment Likes !");
//     // this.props.productdetails.likes++  // props are readonly (UI would not update)
//     // change the state (to update the UI)
//     // this.state.currLikes++; // state is immutable -> cant change original object & need to pass a new object
//     this.setState({ currLikes: this.state.currLikes + 1 });
//   }
//   render(): React.ReactNode {
//     console.log("Within Render - Product Component !");
//     let ratings: React.ReactNode[] = [];
//     for (let i = 0; i < this.props.productdetails.rating; i++) {
//       ratings.push(
//         <i
//           className="fa fa-star"
//           style={{ color: "orange" }}
//           aria-hidden="true"
//           key={i}
//         ></i>,
//       );
//     }
//     return (
// <div className="col-md-3 my-1">
//   <div className="card">
//     <img
//       src={this.props.productdetails.imageUrl}
//       className="card-img-top"
//       alt={this.props.productdetails.title}
//       height="150px"
//     />
//     <div className="card-body">
//       <h5 className="card-title">{this.props.productdetails.title}</h5>
//       <p className="card-text m-0">{ratings}</p>

//       <p className="card-text m-0">₹.{this.props.productdetails.price}</p>
//       <button
//         className="btn btn-outline-primary"
//         onClick={() => this.IncrementLikes()}
//       >
//         {/* {this.props.productdetails.likes}{" "} */}
//         {this.state.currLikes}
//         <i className="fa fa-thumbs-up" aria-hidden="true"></i>
//       </button>
//       <button
//         className="btn btn-outline-danger mx-1"
//         onClick={() =>
//           this.props.deleteAProductFromParent(
//             this.props.productdetails.id,
//           )
//         }
//       >
//         <i className="fa-solid fa-trash"></i>
//       </button>
//     </div>
//   </div>
// </div>
//     );
//   }
// }
