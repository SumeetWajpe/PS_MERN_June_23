import React from "react";
import { Link } from "react-router-dom";
import { CartBadge } from "../cart/cartbadge/cartbadge.component";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
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
              <Link className="nav-link" aria-current="page" to="/">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/newproduct" className="nav-link">
                New Product
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/posts" className="nav-link">
                Posts
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/context" className="nav-link">
                Context API
              </Link>
            </li>
          </ul>
        </div>
        <div className="d-flex ">
          <CartBadge />
        </div>
      </div>
    </nav>
  );
}
