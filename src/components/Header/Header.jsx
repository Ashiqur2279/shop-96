// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <a href="#">Shop 96</a>
      </div>
      <nav className="nav_container">
        <ul className="nav_item">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">Categories</a>
          <a href="#">Deals</a>
          <a href="#">Contact</a>
        </ul>
        <div className="user">
          <a href="#">Cart</a>
          <a href="#">Sign In</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
