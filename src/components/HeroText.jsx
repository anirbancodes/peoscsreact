import React from "react";
import bg from "../assets/gradient2048.avif";
import "../styles/HeroText.css";
import Slider from "../styles/Slider";
import Categories from "./Categories";
import HeroProducts from "./HeroProducts";
import { Link } from "react-router-dom";

const HeroText = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        display: "block",
        width: "100%",
        height: "100%",
        borderRadius: "inherit",
        objectPosition: "center",
        objectFit: "cover",
        backgroundRepeat: "no-repeat",
        // imageRendering: "auto",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        // height: "1000px",
        marginTop: "-10px",
        // paddingTop: "400px",
        // paddingBottom: "400px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "50%",
            flexDirection: "column",
          }}
        >
          <p style={{ fontSize: "54px", color: "white" }}>
            One platform - total control of your all needs
          </p>
          <p style={{ fontSize: "30px", color: "#e5e5e5", fontWeight: "300" }}>
            Centralizing all your monthly expenses in one place to control your
            cash flow and excel in financial planning.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "60px",
            }}
          >
            <Link to="/sign">
              <button className="hero-btn hero-btn-outline">Get Started</button>
            </Link>
            <Link to="/login">
              <button className="hero-btn">Login</button>
            </Link>
          </div>
        </div>
      </div>
      <div style={{ height: "60px" }}></div>
      <Slider />
      <Categories />
    </div>
  );
};

export default HeroText;
