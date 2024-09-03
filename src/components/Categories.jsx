import React, { useEffect, useState } from "react";
import "../styles/Categories.css";
import cat1 from "../assets/cat1-removebg-preview.png";
import cat2 from "../assets/cat2-removebg-preview.png";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5454/api/categories/all")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div class="cat-out">
      {categories.map((i, index) => {
        return (
          <Link to={"/results?cat=" + i.id} class="cat">
            <img src={index % 2 != 0 ? cat1 : cat2} alt="Cat1 Img" />
            <p>{i.categoryName}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Categories;
