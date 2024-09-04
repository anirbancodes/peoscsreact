import React, { useEffect, useState } from "react";
import hp2 from "../images/wear/hp2.avif";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SearchResults = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let params = new URL(document.location).searchParams.get("cat");
    if (params) {
      params -= 11;
      // https://bet.anirbandeb.cloud/login?r=match_close-pos-neg
      //  const redirectParam = params.split("_");
      //  let redirectLink = "";
      //  redirectParam.map((i) => (redirectLink += i + "/"));
      //  setRLink(redirectLink);
      fetch("http://localhost:5454/api/products/category/" + params)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }
  }, []);

  return (
    <>
      <Navbar />
      {/* Filters */}
      <div style={{ display: "flex", gap: "20px" }}>
        {products.map((item, index) => {
          return (
            <div key={index}>
              <Link to={"/product?id=" + item.id} class="product">
                <img src={hp2} alt="" />
                <div class="product-desc">
                  <p
                    style={{
                      color: "white",
                      height: "25px",
                    }}
                  >
                    {item.productName}
                  </p>

                  <div class="product-desc-price">
                    <p style={{ color: "white" }}>₹{item.price}</p>
                    <div>
                      <img class="add-wish" src="/icons/heart.png" alt="" />{" "}
                      {item.stockQuantity}
                    </div>
                  </div>
                </div>
                {/* <hr /> */}
                {/* <div class="add-cart">Add to cart</div> */}
              </Link>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default SearchResults;
