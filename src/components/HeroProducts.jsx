import React, { useEffect, useState } from "react";
import "../styles/HeroProducts.css";

import hp1 from "../images/wear/hp1.avif";
import hp2 from "../images/wear/hp2.avif";
import hp3 from "../images/wear/hp3.avif";
import { Link } from "react-router-dom";

const HeroProducts = () => {
  const [prodId, setProdId] = useState("");
  // useEffect()

  return (
    <div class="hero-products">
      <Link to="/product" class="product">
        <img src={hp1} alt="" />
        <div class="product-desc">
          <p>Zara pink tshirt</p>
          <div class="product-desc-price">
            <p>₹2,999</p>
            <div>
              <img class="add-wish" src="/icons/heart.png" alt="" /> 4.3
            </div>
          </div>
        </div>

        <hr />
        {/* <!-- <div class="add-cart">
          <button style="color: orange">Add to cart</button>
        </div> --> */}
        <div class="add-cart">Add to cart</div>
      </Link>

      <a href="product.html" class="product">
        <img src={hp2} alt="" />
        <div class="product-desc">
          <p>Zara pink tshirt</p>
          <div class="product-desc-price">
            <p>₹2,999</p>
            <div>
              <img class="add-wish" src="/icons/heart.png" alt="" /> 4.3
            </div>
          </div>
        </div>

        <hr />

        <div class="add-cart">Add to cart</div>
      </a>

      <a href="product.html" class="product">
        <img src={hp3} alt="" />
        <div class="product-desc">
          <p>Zara pink tshirt</p>
          <div class="product-desc-price">
            <p>₹2,999</p>
            <div>
              <img class="add-wish" src="/icons/heart.png" alt="" /> 4.3
            </div>
          </div>
        </div>

        <hr />
        <div class="add-cart">Add to cart</div>
      </a>
    </div>
  );
};

export default HeroProducts;
