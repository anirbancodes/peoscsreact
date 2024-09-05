import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUserId } from "../redux/userSlice";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let userId = useSelector((state) => state.user.userId);

  const [user, setData] = useState({});
  useEffect(() => {
    if (userId)
      fetch("http://localhost:5454/api/users/all")
        .then((res) => res.json())
        .then((data) => {
          let user = data.find((item) => item.id === userId);
          setData(user);
        });
  }, []);

  function handleLogout() {
    dispatch(setUserId(""));
    navigate("/");
  }
  if (!userId) navigate("/login");

  return (
    <>
      <Navbar />

      <div style={{ padding: "5px 20px" }}>
        <p
          style={{
            border: "1px solid lightgray",
            width: "420px",
            padding: "8px 10px",
            borderRadius: "4px",
          }}
        >
          Hey {user.username}
        </p>
        <p
          style={{
            border: "1px solid lightgray",
            width: "420px",
            padding: "8px 10px",
            borderRadius: "4px",
          }}
        >
          Your email: {user.email}
        </p>
        <p
          style={{
            border: "1px solid lightgray",
            width: "420px",
            padding: "8px 10px",
            borderRadius: "4px",
          }}
        >
          Mob: {user.phone}
        </p>
        <p
          style={{
            border: "1px solid lightgray",
            width: "420px",
            padding: "8px 10px",
            borderRadius: "4px",
          }}
        >
          Address: {user.address}
        </p>
        <button
          style={{
            border: "1px solid lightgray",
            width: "440px",
            padding: "8px 10px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
