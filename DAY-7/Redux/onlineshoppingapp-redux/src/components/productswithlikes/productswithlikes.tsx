import React from "react";
import { AppState } from "../../redux/store/store";
import { useSelector } from "react-redux";

export default function ProductWithLikes() {
  const products = useSelector((store: AppState) => store.products);

  return (
    <div>
      <ul className="list-group">
        {products.map(product => (
          <li className="list-group-item" key={product.id}>
            {product.title} - {product.likes}
          </li>
        ))}
      </ul>
    </div>
  );
}
