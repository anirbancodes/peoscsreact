import React, { useEffect, useState } from "react";

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
      }}
    >
      {orders?.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              display: "flex",
              gap: "20px",
              border: "1px solid lightgray",
              padding: "5px 10px",
              borderRadius: "6px",
            }}
          >
            <div className="d-f fd-c" style={{ lineHeight: "0px" }}>
              <div className="d-f g-10">
                <p>User: {item.user}</p>
                <p>Total: ₹{item.totalAmount}</p>
                <p>orderDate: {item.orderDate}</p>
              </div>
              <p>{item.description}</p>
              <div className="d-f g-10">
                <p>Status: {item.orderStatus}</p>
                <p>Ship to: {item.shippingAddress}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Orders;
