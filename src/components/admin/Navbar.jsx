import React from "react";

const Navbar = ({ option, onOptionChange }) => {
  return (
    <nav style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "orange",
          color: "white",
          border: "none",
        }}
        onClick={() => onOptionChange("products")}
      >
        Products
      </button>
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "orange",
          color: "white",
          border: "none",
        }}
        onClick={() => onOptionChange("orders")}
      >
        Orders
      </button>
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "orange",
          color: "white",
          border: "none",
        }}
        onClick={() => onOptionChange("users")}
      >
        Users
      </button>
    </nav>
  );
};

export default Navbar;
