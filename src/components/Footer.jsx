import React from "react";
import "../styles/Footer.css";

import advertiseIcon from "../images/flipkart/advertise.svg";
import becomeIcon from "../images/flipkart/become.svg";
import giftIcon from "../images/flipkart/gift.svg";
import pay1Icon from "../images/flipkart/pay/1.svg";

import fbIcon from "../images/icons/flip/fb.svg";
import xIcon from "../images/icons/flip/x.svg";
import ytIcon from "../images/icons/flip/yt.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div class="footer">
      <div class="f-sec1 g-10">
        <p>About</p>
        <div class="f-sec1-in">
          <Link to="">Contact</Link>
          <Link to="">About Us</Link>
          <Link to="">Careers</Link>
        </div>
      </div>
      <div class="f-sec1 g-10">
        <p>About</p>
        <div class="f-sec1-in">
          <Link to="">Contact</Link>
          <Link to="">About Us</Link>
          <Link to="">Careers</Link>
        </div>
      </div>
      <div
        class="f-sec1"
        style={{
          borderLeft: "1px solid rgba(184, 184, 184, 0.683)",
          paddingLeft: "20px",
        }}
      >
        <p>Mail Us:</p>
        <p>
          Kothi Pari, Gera Sector 8 kure,
          <br />
          Caran Tharan, rubicorna, <br />
          Merc aneli jatt kure
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <p>Social</p>
          <div class="social-icons">
            <img src={xIcon} alt="X" />
            <img src={ytIcon} alt="In" />
            <img src={fbIcon} alt="Fb" />
          </div>
        </div>
      </div>
      <div class="">
        <p>Stay Updated</p>
        <input
          style={{
            marginLeft: "0px",
            backgroundColor: "rgba(211, 210, 210, 0.856)",
            color: "rgb(84, 84, 84)",
          }}
          type="text"
          placeholder="Enter your email"
          name=""
          id=""
        />
        <p>&nbsp;</p>
        <p>&copy; ShopSphere, 2024. All rights reserved.</p>
      </div>
      <div class="">
        <div className="last-icons">
          <img src={advertiseIcon} alt="" />
          <p>Advertise with us</p>
        </div>
        <div className="last-icons">
          <img src={becomeIcon} alt="" />
          <p>Become a seller</p>
        </div>
        <div className="last-icons">
          <img src={giftIcon} alt="" />
          <p>Gift cards</p>
        </div>
        <img src={pay1Icon} alt="" />
      </div>
    </div>
  );
};

export default Footer;
