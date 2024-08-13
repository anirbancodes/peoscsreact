import React from "react";
import "../styles/Categories.css";
import cat1 from "../images/cat1.avif";
import cat2 from "../images/cat2.avif";

const Categories = () => {
  return (
    <div class="cat-out">
      <div class="cat">
        <img src={cat1} alt="Cat1 Img" />
        <p>Electronics</p>
      </div>
      <div class="cat">
        <img src={cat2} alt="" />
        <p>Fashion</p>
      </div>
      <div class="cat">
        <img src={cat1} alt="" />
        <p>Furniture</p>
      </div>
      <div class="cat">
        <img src={cat2} alt="" />
        <p>Grocery</p>
      </div>
      <div class="cat">
        <img src={cat1} alt="" />
        <p>Beauty</p>
      </div>
      <div class="cat">
        <img src={cat2} alt="" />
        <p>Fashion</p>
      </div>
    </div>
  );
};

export default Categories;
