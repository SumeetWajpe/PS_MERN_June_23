import { FC } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../../redux/store/store";

export const CartBadge: FC = () => {
  let cart = useSelector((store: AppState) => store.cart);
  return (
    <div className="d-flex align-items-center">
      <i className="fa fa-shopping-cart" aria-hidden="true"></i>
      <span className="badge text-bg-warning mx-1">{cart.length}</span>
    </div>
  );
};
