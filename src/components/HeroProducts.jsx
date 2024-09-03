import React, { useEffect, useState } from "react";
import "../styles/HeroProducts.css";

import hp1 from "../images/wear/hp1.avif";
import hp2 from "../images/wear/hp2.avif";
import hp3 from "../images/wear/hp3.avif";
import bg from "../assets/gradient2048.avif";
import { Link } from "react-router-dom";

const HeroProducts = ({ catName }) => {
  const [prodId, setProdId] = useState("");
  // useEffect()

  return (
    <div
      style={{
        // backgroundColor: "black",
        backgroundImage: `url(${bg})`,
        display: "block",
        width: "100%",
        height: "100%",
        borderRadius: "inherit",
        objectPosition: "center",
        objectFit: "cover",
        // backgroundRepeat: "no-repeat",
        // filter: "blur(12px)",
      }}
    >
      <h3
        style={{
          marginLeft: "70px",
          color: "var(--active)",
          borderLeft: "4px solid var(--active)",
          paddingLeft: "8px",
        }}
      >
        Trending in {catName}
      </h3>

      <div class="hero-products">
        {[
          { n: hp1 },
          { n: hp2 },
          { n: hp3 },
          { n: hp1 },
          { n: hp2 },
          { n: hp3 },
        ].map((i) => {
          return (
            <Link to="/product" class="product">
              <img src={i.n} alt="" />
              <div class="product-desc">
                <p>Zara pink tshirt</p>
                <div class="product-desc-price">
                  <p>₹2,999</p>
                  <div>
                    <img class="add-wish" src="/icons/heart.png" alt="" /> 4.3
                  </div>
                </div>
              </div>
              {/* <hr /> */}
              {/* <div class="add-cart">Add to cart</div> */}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HeroProducts;
