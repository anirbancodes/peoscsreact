import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import logo from "../images/logo2.png";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "../assets/search.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let userId = useSelector((state) => state.user.userId);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  function handleSearch() {
    navigate("/results?query=" + searchText);
  }
  return (
    <div
      class="nav"
      style={{
        backgroundColor: userId ? "white" : "black",
      }}
    >
      <div class="nav-in">
        <Link to={"/"}>
          {" "}
          <img class="logo" src={logo} alt="Logo" />
        </Link>

        {/* <div class="nav-links">
        <a href="">Link</a>
        <a href="">Link</a>
      </div> */}
        <div
          className="search-div"
          style={{ display: "flex", alignItems: "center", gap: "0px" }}
        >
          <input
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search for iphone 13, mens tshirt, etc."
          />
          <button
            style={{
              border: "none",
              outline: "none",
              backgroundColor: "white",
              alignItems: "center",
            }}
            value={searchText}
            className="search-btn"
            onClick={handleSearch}
          >
            <img className="search-btn-img" src={SearchIcon} alt="Search" />
          </button>
        </div>

        <div class="nav-icons">
          <a href="/admin">
            <img src="/icons/heart.png" alt="" />
          </a>

          <Link to="/cart">
            <img src="/icons/cart.png" alt="" />
          </Link>
          <a href="/order-details">
            <img src="/icons/bell.png" alt="" />
          </a>
          <Link to="/profile">
            <img src="/icons/user.png" alt="" />
          </Link>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
