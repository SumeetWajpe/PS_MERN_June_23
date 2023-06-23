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
        "https://m.media-amazon.com/images/I/61bX2AoGj2L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 2,
      title: "Nikon 7200",
      price: 200000,
      rating: 4,
      likes: 500,
      imageUrl:
        "https://i.gadgets360cdn.com/products/cameras/large/1548234910_832_nikon_d7200-24-2mp-dslr-camera.jpg",
    },
    {
      id: 3,
      title: "Nikon Alucon",
      price: 20000,
      rating: 5,
      likes: 300,
      imageUrl: "https://m.media-amazon.com/images/I/41b7-Rh1J+L.jpg",
    },
  ];
  render(): React.ReactNode {
    return (
      <div className="row">
        {this.products.map((product: ProductModel) => (
          <ProductComponent productdetails={product}  />
        ))}
      </div>
    );
  }
}
