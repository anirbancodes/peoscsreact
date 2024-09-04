import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Checkout.css";
import Footer from "../components/Footer";
// import RzpBtn from "../components/RzpBtn";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [info, setInfo] = useState({
    name: "",
    address1: "",
    address2: "",
    pincode: "",
    state: "",
  });
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
        <Link className="pay-button" to="">
          <button className="proceed">Proceed to pay</button>
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default Checkout;
