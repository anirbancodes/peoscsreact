import React from "react";
import "../styles/Categories.css";
import cat1 from "../images/cat1.avif";
import cat2 from "../images/cat2.avif";

const Categories = () => {
  return (
    <div class="cat-out">
      {[
        "Electronics",
        "Fashion",
        "Furniture",
        "Grocery",
        "Beauty",
        "Fashion",
        "Furniture",
        "Grocery",
        "Beauty",
      ].map((i, index) => (
        <div class="cat">
          <img src={index % 2 != 0 ? cat1 : cat2} alt="Cat1 Img" />
          <p>{i}</p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
