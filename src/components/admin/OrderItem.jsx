import React, { useState } from "react";

const OrderItem = ({ item }) => {
  const [status, setStatus] = useState("");
  function handleChangeOrderStatus() {
    fetch("http://localhost:5454/api/orders/" + item.id, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({
        orderStatus: status,
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
            {item.orderStatus}
          </p>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p>Change status:</p>
        <div style={{ display: "flex", gap: "20px" }}>
          <select onSelect={(e) => setStatus(e.target.value)}>
            <option value="Processing">Processing</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivererd">Delivererd</option>
          </select>
          <button onClick={handleChangeOrderStatus(item.id)}>Update</button>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
