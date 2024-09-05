import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Checkout.css";
import Footer from "../components/Footer";
// import RzpBtn from "../components/RzpBtn";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Checkout = () => {
  let userId = useSelector((state) => state.user.userId);
  if (!userId) userId = -1;
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    name: "",
    address1: "",
    address2: "",
    pincode: "",
    state: "",
  });
  // const [orderID, setOrderID] = useState(0);
  let orderID = 0;
  useEffect(() => {
    const script = document.createElement("script");
    document.body.appendChild(script);

    script.src = "https://cdn.razorpay.com/static/embed_btn/bundle.js";
    script.defer = true;
    script.id = "razorpay-embed-btn-js";

    // script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    // script.dataset.payment_button_id = "pl_Ot2CBJHibTGm5r";
    // script.async = true;

    return () => {
      document.body.removeChild(script); // Cleanup the script when component unmounts
    };
  }, []);

  async function handlePayment() {
    document.getElementById("proceed-to-pay").style.display = "none";
    document.getElementById("razorpay-btn").style.display = "";
    let amount = Number(new URL(window.location.href).searchParams.get("t"));
    console.log(amount);
    console.log(new Date().toLocaleDateString());
    if (!userId) {
      let text = prompt("Proceed without login!", "YES");
      if (text == "YES") {
        text = "You pressed OK!";
      } else {
        text = "You canceled!";
      }
      userId = -1;
    }
    let date = "";
    await fetch("https://time.api.anirbandeb.cloud/zero")
      .then((res) => res.json())
      .then((data) => (date = data.date))
      .catch((e) => (date = "2024-09-05"));
    console.log(date);

    fetch("http://localhost:5454/api/orders", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        user: userId,
        orderDate: date,
        totalAmount: amount,
        orderStatus: "Processing",
        shippingAddress: `${info.name}, ${info.address1}, ${info.address2}, ${info.state}-${info.pincode}`,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // setOrderID(data.id);
        orderID = data.id;
        console.log(orderID, " ORDER");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    await fetch("http://localhost:5454/api/cart-items/user/" + userId)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        data.map((item) => {
          let pPrice = 0;
          fetch("http://localhost:5454/api/products/" + item.product)
            .then((res) => res.json())
            .then((data) => (pPrice = data.price))
            .then(() => {
              console.log(":::", {
                orderNo: orderID,
                product: item.product,
                quantity: item.quantity,
                totalPrice: item.quantity * pPrice,
              });
              fetch("http://localhost:5454/api/order-items", {
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({
                  orderNo: orderID,
                  product: item.product,
                  quantity: item.quantity,
                  totalPrice: item.quantity * pPrice,
                }),
              })
                .then((res) => res.json())
                .then((data) => console.log(data));
            })
            .then(() => {
              fetch("http://localhost:5454/api/cart-items/" + item.id, {
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                method: "DELETE",
              });
            });
        });
      });
    document.getElementById("success").style.display = "";
  }
  return (
    <>
      <Navbar />
      <div className="shipping">
        <input
          onChange={(e) => setInfo({ ...info, name: e.target.value })}
          type="text"
          placeholder="Enter billing name"
        />
        <input
          onChange={(e) => setInfo({ ...info, address1: e.target.value })}
          type="text"
          placeholder="Address Line 1"
        />
        <input
          onChange={(e) => setInfo({ ...info, address2: e.target.value })}
          type="text"
          placeholder="Address Line 2"
        />
        <input
          onChange={(e) => setInfo({ ...info, pincode: e.target.value })}
          type="number"
          placeholder="Pincode"
        />
        <input
          onChange={(e) => setInfo({ ...info, state: e.target.value })}
          type="text"
          placeholder="State"
        />
        {/* <RzpBtn /> */}
        <div id="proceed-to-pay" className="pay-button">
          <button onClick={handlePayment} className="proceed">
            Proceed to pay
          </button>
        </div>

        <div
          id="razorpay-btn"
          style={{ display: "none" }}
          className="razorpay-embed-btn"
          data-url="https://pages.razorpay.com/pl_Ot2JTtmHOQ9e4E/view"
          data-text="Pay Now"
          data-color="#7C51F0"
          data-size="large"
        ></div>
        <button
          id="success"
          style={{ display: "none" }}
          onClick={() => navigate("/checkout/success?orderID=" + orderID)}
        >
          Go to sucess page
        </button>
        {/* <div id="razorpay-payment-button" /> */}
      </div>
      <Footer />
    </>
  );
};

export default Checkout;

// function Tracking() {
//   return (
//     <script>
//     (function(){
//       var d=document; var x=!d.getElementById('razorpay-embed-btn-js')
//       if(x){ var s=d.createElement('script'); s.defer=!0;s.id='razorpay-embed-btn-js';
//       s.src='https://cdn.razorpay.com/static/embed_btn/bundle.js';d.body.appendChild(s);} else{var rzp=window['__rzp__'];
//       rzp && rzp.init && rzp.init()}})();
//   </script>
//   );
// }
