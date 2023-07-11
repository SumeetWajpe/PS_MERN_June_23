import { FC } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../../redux/store/store";
import { Link } from "react-router-dom";

export const CartBadge: FC = () => {
  let cart = useSelector((store: AppState) => store.cart);
  return (
    <div className="d-flex align-items-center">
      <i className="fa fa-shopping-cart" aria-hidden="true"></i>
      <span
        className="badge text-bg-warning mx-1"
        style={{ textDecoration: "none" }}
      >
        <Link to="/dashboard/cartsummary">{cart.length}</Link>{" "}
      </span>
    </div>
  );
};
