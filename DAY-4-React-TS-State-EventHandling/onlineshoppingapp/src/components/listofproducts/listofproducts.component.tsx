import React from "react";
import { ProductModel } from "../../models/product.model";
import { ProductComponent } from "../product/product.component";

export class ListOfProducts extends React.Component {
  products: ProductModel[] = [
    {
      id: 1,
      title: "Macbook Pro",
      price: 250000,
      rating: 5,
      likes: 200,
      imageUrl:
        "https://photos5.appleinsider.com/gallery/45240-88149-The-new-MacBook-Pro-16-inch-xl.jpg",
    },
    {
      id: 2,
      title: "Nikon 7200",
      price: 200000,
      rating: 4,
      likes: 500,
      imageUrl:
        "https://i0.wp.com/dailylearn.com/wp-content/uploads/2023/01/How-to-Shoot-Video-on-Your-Nikon-d7200.jpg",
    },
    {
      id: 3,
      title: "Nikon Alucon",
      price: 20000,
      rating: 5,
      likes: 300,
      imageUrl: "https://cdn.mos.cms.futurecdn.net/Eio3uWyghbtMGVDzXBWn8T.jpg",
    },
  ];
  render(): React.ReactNode {
    return (
      <div className="row">
        {this.products.map((product: ProductModel) => (
          <ProductComponent productdetails={product} />
        ))}
      </div>
    );
  }
}
