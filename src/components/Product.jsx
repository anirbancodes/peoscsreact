import React, { useEffect, useState } from "react";
import "../styles/Product.css";
import hp3 from "../images/wear/hp3.avif";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../redux/cartSlice";

const Product = () => {
  const [info, setInfo] = useState({
    productName: "",
    rating: "",
    categoryId: "",
    id: "",
    description: "",
    price: "",
    stockQuantity: "",
  });

  let userId = useSelector((state) => state.user.userId);

  const dispatch = useDispatch();

  useEffect(() => {
    const prodID = new URL(window.location.href).searchParams.get("id");
    if (prodID) {
      fetch(`http://localhost:5454/api/products/${prodID}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setInfo(data);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, []);

  const handleAddToCart = () => {
    // Create a cart item object
    const cartItem = {
      id: info.id,
      productName: info.productName,
      price: info.price,
      qty: 1, // Default quantity when adding to cart
    };
    fetch("http://localhost:5454/api/cart-items", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        user: userId,
        product: Number(new URL(window.location.href).searchParams.get("id")),
        quantity: 1,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // Dispatch an action to update the cart in Redux
    // dispatch(setCart(cartItem));

    console.log("Added to cart:", cartItem);
  };

  return (
    <div className="div">
      <div className="prod-photo">
        <img src={hp3} alt="" />
      </div>
      <div className="desc">
        <div className="details">
          <p
            style={{ color: "rgb(104, 104, 250)", textTransform: "uppercase" }}
          >
            Express Shipping
          </p>
          <h3 style={{ color: "black" }}>{info.productName}</h3>
          <p>{info.description}</p>
          <div className="rating">
            <div className="rating-inner1">
              <p>{info.rating}</p>
              <img style={{ width: "15px" }} src="/icons/bolt.svg" alt="" />
            </div>
            <p>Based on user ratings</p>
          </div>
          <div className="price">
            <div className="price-inner1">
              <h2 style={{ color: "black" }}>₹{info.price}</h2>
              <h3 style={{ color: "green", fontWeight: 400 }}>25% Off</h3>
            </div>
            <div className="price-inner2">
              <p>
                MRP ₹<strike>{(info.price / 0.75).toFixed(2)}</strike>
              </p>
              <p>Inc. of all taxes</p>
            </div>
          </div>
        </div>

        <div onClick={handleAddToCart} className="add-cart">
          <img src="/icons/heart.png" alt="" />
          <p>Add to Cart</p>
        </div>
      </div>
      <div className="reviews">
        <h3>Reviews & Ratings</h3>
        <p>No reviews yet</p>
      </div>
    </div>
  );
};

export default Product;
