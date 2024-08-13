import React from "react";
import { Link } from "react-router-dom";

const ProfileCard = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Link to={"/account"}>My Account</Link>
      <Link to={"/orders"}>My Orders</Link>
    </div>
  );
};

export default ProfileCard;
