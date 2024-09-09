import React, { useEffect, useState } from "react";
import OrderItem from "./OrderItem";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  //  const [mode, setMode] = useState("");

  useEffect(() => {
    fetch("http://localhost:5454/api/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div
      className="d-f fd-c g-10 "
      style={{
        padding: "20px",
        // background: "linear-gradient(135deg, #1b2b60, #461d55)",
        // color: "white",
        backgroundColor: "orange",
      }}
    >
      {orders?.map((item) => {
        return <OrderItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Orders;
