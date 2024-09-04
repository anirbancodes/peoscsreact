import React from "react";

const Navbar = ({ option, onOptionChange }) => {
  return (
    <nav>
      <button onClick={() => onOptionChange("products")}>Products</button>
      <button onClick={() => onOptionChange("orders")}>Orders</button>
      <button onClick={() => onOptionChange("users")}>Users</button>
    </nav>
  );
};

export default Navbar;
