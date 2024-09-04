import React, { useState } from "react";
import "../styles/Login.css";
import HeroPic from "../images/undraw_login_re_4vu2.svg";
import GoogleLogo from "../images/google.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserId } from "../redux/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:5454/api/users/email", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      if (res.status === 200) {
        const data = await fetch("http://localhost:5454/api/users/all");
        const users = await data.json();

        const user = users.find((item) => item.email === email);
        if (user) {
          console.log(user.id);
          dispatch(setUserId(user.id));
          navigate("/");
        } else {
          alert("User not found");
        }
      } else {
        alert("Login failed: ", res.status);
      }
    } catch (error) {
      console.log(error.message);
      alert("An error occurred: ", error);
    }
  };

  return (
    <div id="signin" className="d-f j-c a-c fd-c out-body">
      <img
        className="img"
        src={HeroPic}
        style={{ width: "200px", height: "100px", marginBottom: "2px" }}
      />
      <h2 style={{ color: "var(--orange)" }}>ECom</h2>
      <p>Sign in to access your account</p>
      {/* <div onClick={() => handleLogin('12345')} className="btn">
        <img className="img" src={GoogleLogo} alt="" />
        <p>Sign with Google</p>
      </div> */}
      <p>or</p>
      <div
        className="d-f j-c fd-c a-c"
        style={{
          border: "1px solid rgba(214, 214, 214, 0.288)",
          padding: "24px",
        }}
      >
        <p>Email</p>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
        />
        <p>Password</p>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
        />
        <p></p>
        <div onClick={() => handleLogin()} className="btn">
          Login
        </div>
      </div>

      <Link to={"/sign"}>
        <p>
          Don't have an account? <u>Sign up here</u>
        </p>
      </Link>
    </div>
  );
};

export default Login;
