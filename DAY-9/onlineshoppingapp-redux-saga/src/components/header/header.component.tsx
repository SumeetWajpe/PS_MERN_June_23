import React from "react";
import { Link } from "react-router-dom";
import { CartBadge } from "../cart/cartbadge/cartbadge.component";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store/store";

export default function Header() {
  const user = useSelector((store: AppState) => store.user);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/dashboard">
          Onlineshopping
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/dashboard">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard/newproduct" className="nav-link">
                New Product
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard/posts" className="nav-link">
                Posts
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard/context" className="nav-link">
                Context API
              </Link>
            </li>
          </ul>
        </div>
        <div className="d-flex ">
          <span>Hello {user.uname} !</span>
          <CartBadge />
        </div>
      </div>
    </nav>
  );
}
