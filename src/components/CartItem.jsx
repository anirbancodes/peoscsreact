import React, { useState } from "react";
import "../styles/CartItem.css";

const CartItem = ({
  id,
  name,
  stock,
  qty,
  price,
  onQuantityChange,
  onRemove,
}) => {
  const [details, setDetails] = useState({ qty, value: qty * price });
  const [isVisible, setIsVisible] = useState(true);

  const handleQuantityChange = (change) => {
    setDetails((prevDetails) => {
      const newQty = prevDetails.qty + change;
      if (newQty < 1 || newQty > stock) return prevDetails; // Ensuring qty within range

      const newDetails = {
        qty: newQty,
        value: newQty * price,
      };

      if (onQuantityChange) onQuantityChange(id, newQty); // Notify parent
      return newDetails;
    });
  };

  const handleRemove = (e) => {
    e.preventDefault();
    setIsVisible(false); // Hide the component
    if (onRemove) onRemove(id); // Call the remove function passed as a prop
  };

  if (!isVisible) return null;

  return (
    <div className="cart-item">
      <img
        src="https://cdn.dummyjson.com/products/images/groceries/Green%20Chili%20Pepper/thumbnail.png"
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
