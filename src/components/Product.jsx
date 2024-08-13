import React from "react";
import "../styles/Product.css";

import hp1 from "../images/wear/hp1.avif";
import hp2 from "../images/wear/hp2.avif";
import hp3 from "../images/wear/hp3.avif";

const Product = () => {
  return (
    <div class="div">
      <div class="prod-photo">
        <img src={hp3} alt="" />
      </div>
      <div class="desc">
        <div class="details">
          <p
            style={{ color: "rgb(104, 104, 250)", textTransform: "uppercase" }}
          >
            Express Shipping
          </p>
          <h3 style={{ color: "black" }}>US Polo Assn Denim Co.</h3>
          <p>Utility Twill Shirt</p>
          <div class="rating">
            <div class="rating-inner1">
              <p>4.3</p>
              <img style={{ width: "15px" }} src="/icons/bolt.svg" alt="" />
            </div>
            <p>Based on 34 ratings</p>
          </div>
          <div class="price">
            <div class="price-inner1">
              <h2 style={{ color: "black" }}>₹1,752</h2>
              <h3 style={{ color: "green", fontWeight: 400 }}>27% Off</h3>
            </div>
            <div class="price-inner2">
              <p>
                MRP ₹<strike>2,399</strike>
              </p>
              <p>Inc. of all taxes</p>
            </div>
          </div>
        </div>
        <h3>Select Size</h3>
        <div class="prod-options">
          <div class="option">S</div>
          <div class="option">M</div>
        </div>

        <div class="add-cart">
          <img src="/icons/heart.png" alt="" />
          <p>Add to Cart</p>
        </div>
      </div>
      <div class="reviews">
        <h3>Reviews & Ratings</h3>
        <p>No reviews yet</p>
      </div>
    </div>
  );
};

export default Product;
