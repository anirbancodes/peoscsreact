import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div class="footer">
      <div class="f-sec1 g-10">
        <p>About</p>
        <div class="f-sec1-in">
          <a href="">Contact</a>
          <a href="">About Us</a>
          <a href="">Careers</a>
        </div>
      </div>
      <div class="f-sec1 g-10">
        <p>About</p>
        <div class="f-sec1-in">
          <a href="">Contact</a>
          <a href="">About Us</a>
          <a href="">Careers</a>
        </div>
      </div>
      <div
        class="f-sec1"
        // style="border-left: 1px solid gray; padding-left: 30px"
      >
        <p>Mail Us:</p>
        <p>
          Kothi Pari, Gera Sector 8 kure,
          <br />
          Caran Tharan, rubicorna, <br />
          Merc aneli jatt kure
        </p>
      </div>
      <div className="">
        <p>Social</p>
        <div class="social-icons">
          <img src="" alt="X" />
          <img src="" alt="In" />
          <img src="" alt="Fb" />
        </div>
        <div style={{ height: 10 }}></div>
        <input width={100} type="text" placeholder="Subscribe" />
      </div>
    </div>
  );
};

export default Footer;
