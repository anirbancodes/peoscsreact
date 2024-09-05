import React from "react";
import bg from "../assets/bg-small2.avif";
import "../styles/HeroText.css";
import Slider from "../styles/Slider";
import Categories from "./Categories";
import HeroProducts from "./HeroProducts";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HeroText = () => {
  let userId = useSelector((state) => state.user.userId);
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          // display: "block",
          // width: "100%",
          // height: "100%",
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
          {!userId && (
            <>
              <div
                style={{
                  width: "50%",
                  flexDirection: "column",
                }}
              >
                <p style={{ fontSize: "54px" }}>
                  One platform - total control of your all needs
                </p>
                <p
                  style={{
                    fontSize: "30px",
                    fontWeight: "300",
                  }}
                >
                  Centralizing all your needs from A to Z
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "60px",
                  }}
                >
                  <Link to="/sign">
                    <button className="hero-btn hero-btn-outline">
                      Signup
                    </button>
                  </Link>
                  <Link to="/login">
                    <button className="hero-btn">Login</button>
                  </Link>
                </div>
              </div>
              <div
                style={{
                  height: "60px",
                  backgroundColor: userId ? "white" : "black",
                }}
              ></div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default HeroText;
