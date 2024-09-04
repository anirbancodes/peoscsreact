import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import logo from "../images/logo2.png";

const Navbar = () => {
  return (
    <div class="nav">
      <div class="nav-in">
        <img class="logo" src={logo} alt="Logo" />
        {/* <div class="nav-links">
        <a href="">Link</a>
        <a href="">Link</a>
      </div> */}
        <input
          type="text"
          className="search"
          placeholder="Search for iphone 13, mens tshirt, etc."
        />

        <div class="nav-icons">
          <a href="">
            <img src="/icons/heart.png" alt="" />
          </a>
          <Link to="/cart">
            <img src="/icons/cart.png" alt="" />
          </Link>
          <a href="/order-details">
            <img src="/icons/bell.png" alt="" />
          </a>
          <Link to="/login">
            <img src="/icons/user.png" alt="" />
          </Link>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
