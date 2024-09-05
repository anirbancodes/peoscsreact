import React, { useEffect, useState } from "react";
import hp2 from "../images/wear/hp2.avif";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SearchResults = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let cat = new URL(document.location).searchParams.get("cat") || "";
    if (cat) {
      cat -= 11;
      // https://bet.anirbandeb.cloud/login?r=match_close-pos-neg
      //  const redirectParam = params.split("_");
      //  let redirectLink = "";
      //  redirectParam.map((i) => (redirectLink += i + "/"));
      //  setRLink(redirectLink);
      fetch("http://localhost:5454/api/products/category/" + cat)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }
    let query = new URL(document.location).searchParams.get("query") || "";
    if (query) {
      fetch("http://localhost:5454/api/products/name/" + query)
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch(() => console.log("No results"));
    }
  }, []);

  return (
    <>
      <Navbar />
      {/* Filters */}
      <p style={{ marginLeft: "20px", fontSize: "14px" }}>Search Results</p>
      <div style={{ display: "flex", gap: "20px", padding: "10px 45px" }}>
        {products.map((item, index) => {
          return (
            <div key={index}>
              <Link to={"/product?id=" + item.id} class="product">
                <img src={hp2} alt="" />
                <div class="product-desc">
                  <p
                    style={{
                      height: "25px",
                    }}
                  >
                    {item.productName}
                  </p>

                  <div class="product-desc-price">
                    <p>₹{item.price}</p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
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
        {!products.length && <h3>Oops.. No products found!</h3>}
      </div>
      <Footer />
    </>
  );
};

export default SearchResults;
