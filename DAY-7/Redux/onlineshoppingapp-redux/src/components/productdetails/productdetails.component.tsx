import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductModel } from "../../models/product.model";
import { Rating } from "../rating/rating.component";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store/store";
import { Title } from "../atoms/title/title.component";

export default function ProductDetails() {
  const { id = 0 } = useParams();
  const [theProduct, setTheProduct] = useState(new ProductModel());
  let theProducts = useSelector((store: AppState) => store.products);
  useEffect(() => {
    let p = theProducts.find((p: ProductModel) => p.id == id);
    setTheProduct(p as ProductModel);
  }, []);
  return (
    <main className="row my-2">
      <div className="col-md-9">
        <img
          src={theProduct.imageUrl}
          className="card-img-top"
          alt={theProduct.title}
          height="100%"
          width="100%"
        />
      </div>
      <div className="col-md-3 border-start">
        {/* <h2>{theProduct.title}</h2> */}
        <Title color="purple">
          <h2>{theProduct.title}</h2>
        </Title>
        <Rating numberofstars={theProduct.rating} color="darkorange" />
        <p className="card-text">₹.{theProduct.price}</p>
        <p className="card-text">{theProduct.likes}</p>

        <div>{theProduct.description}</div>
      </div>
    </main>
  );
}
