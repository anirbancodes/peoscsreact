import React from "react";
import "../styles/Login.css";
import HeroPic from "../images/undraw_login_re_4vu2.svg";
import GoogleLogo from "../images/google.svg";

const Signup = () => {
  return (
    <div id="signin" class="d-f j-c a-c fd-c out-body">
      <img
        className="img"
        src={HeroPic}
        style={{ width: "200px", height: "100px", marginBottom: "2px" }}
      />
      <h2 style={{ color: "var(--orange)" }}>ECom</h2>
      <p>Sign in to access your account</p>
      <div class="btn">
        <img className="img" src={GoogleLogo} alt="" />
        <p>Sign with Google</p>
      </div>
      <p>or</p>
      <div
        class="d-f j-c fd-c a-c"
        style={{
          border: "1px solid rgba(214, 214, 214, 0.288)",
          padding: "24px",
        }}
      >
        <p>Email</p>
        <input type="email" id="email" />
        <p>Password</p>
        <input type="password" id="password" />
        <p></p>
        <div class="btn">Signup</div>
      </div>

      <p>
        Already have an account? <u>Login here</u>
      </p>
    </div>
  );
};

export default Signup;
