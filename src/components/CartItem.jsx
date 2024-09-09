import React, { useState } from "react";
import "../styles/CartItem.css";

const CartItem = ({
  id,
  name,
  stock,
  qty,
  imageUrl,
  price,
  onQuantityChange,
  onRemove,
}) => {
  const [details, setDetails] = useState({ qty, value: qty * price });
  const [isVisible, setIsVisible] = useState(true);

  /* const handleQuantityChange = (change) => {
    setDetails((prevDetails) => {
      const newQty = prevDetails.qty + change;
      if (newQty < 1 || newQty > stock) return prevDetails; // Ensuring qty within range

      fetch("http://localhost:5454/api/cart-items/" + id, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({
          newQuantity: Number(newQty),
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      const newDetails = {
        qty: newQty,
        value: newQty * price,
      };

      // if (onQuantityChange) onQuantityChange(id, newQty); // Notify parent
      return newDetails;
    });
  }; */
  const handleQuantityChange = (change) => {
    setDetails((prevDetails) => {
      const newQty = prevDetails.qty + change;
      if (newQty < 1 || newQty > stock) return prevDetails; // Ensuring qty within range

      fetch("http://localhost:5454/api/cart-items/" + id, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({
          newQuantity: newQty,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log("Success:", data);
          // Call the onQuantityChange if available
          if (onQuantityChange) onQuantityChange(id, newQty);
        })
        .catch((error) => {
          console.error("Error:", error.message);
        });

      const newDetails = {
        qty: newQty,
        value: newQty * price,
      };

      return newDetails;
    });
  };

  const handleRemove = (e) => {
    e.preventDefault();
    fetch("http://localhost:5454/api/cart-items/" + id, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    setIsVisible(false); // Hide the component
    // if (onRemove) onRemove(id); // Call the remove function passed as a prop
  };

  if (!isVisible) return null;

  return (
    <div key={id} className="cart-item">
      <img
        src={imageUrl}
        alt={name}
        style={{ border: "1px solid white" }}
        width={120}
        height={120}
      />
      <div className="cart-item-desc">
        <p style={{ marginBottom: "-5px" }}>{name}</p>
        <p>StockQty: {stock}</p>
        <div className="cart-item-qty-div">
          <button
            onClick={(e) => {
              e.preventDefault();
              handleQuantityChange(-1);
            }}
            className="cart-item-qty-minus"
            disabled={details.qty <= 1}
          >
            -
          </button>
          <p className="cart-item-qty">{details.qty}</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleQuantityChange(1);
            }}
            className="cart-item-qty-plus"
            disabled={details.qty >= stock}
          >
            +
          </button>
          <button onClick={handleRemove} className="cart-item-delete">
            Delete
          </button>
        </div>
      </div>
      <h2 className="cart-item-value">₹{details.value.toFixed(2)}</h2>
    </div>
  );
};

export default CartItem;
