import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="link">
        <h1 className="title">Shopping Cart</h1>
      </Link>
      <Link to="/cart" className="link">
        <div className="cart_container">
          <img
            src="/assets/shopping-cart.png"
            alt="cartimage"
            className="cartimage"
            width={50}
            height={50}
          />
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
