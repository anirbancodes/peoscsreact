import React from "react";
import { useDispatch } from "react-redux";
import { clearUserId } from "../redux/userSlice";

function Logout() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Simulate logout process and then clear user ID
    dispatch(clearUserId());
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;
