import React, { useState } from "react";

const OrderItem = ({ item }) => {
  const [status, setStatus] = useState(item.orderStatus);

  function handleChangeOrderStatus(id, value) {
    console.log("::", id);
    fetch("http://localhost:5454/api/orders/" + id, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({
        orderStatus: value,
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
        setStatus(value);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  }

  return (
    <div
      key={item.id}
      style={{
        display: "flex",
        gap: "20px",
        // border: "1px solid lightgray",
        backgroundColor: "white",
        padding: "5px 10px",
        borderRadius: "6px",
        alignItems: "center",
      }}
    >
      <div className="d-f fd-c" style={{ lineHeight: "0px" }}>
        <div className="d-f g-10">
          <p>#ID: {item.id}</p>
          <p>User: {item.user}</p>
          <p>Total: ₹{item.totalAmount}</p>
          <p>orderDate: {item.orderDate}</p>
        </div>
        <p>{item.description}</p>
        <div className="d-f g-10" style={{ marginTop: "-25px" }}>
          <p>Ship to: {item.shippingAddress}</p>
          <p>
            Status:
            {status}
          </p>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p>Change status:</p>
        <div style={{ display: "flex", gap: "20px" }}>
          <select
            style={{
              padding: "5px 10px",
              backgroundColor: "orangered",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onChange={(e) => handleChangeOrderStatus(item.id, e.target.value)}
          >
            <option value="Processing">Processing</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivererd">Delivererd</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
