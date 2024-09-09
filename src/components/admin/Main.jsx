import React from "react";
import Products from "./Products";
import Orders from "./Orders";

const Main = ({ option }) => {
  return (
    <div>
      {option === "products" && <Products />}
      {option === "orders" && <Orders />}
    </div>
  );
};

export default Main;
