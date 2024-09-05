import "../styles/Slider.css";
import SliderPic1 from "../images/slider1.webp";
import Slider1 from "../assets/banner/1.jpg";
import Slider2 from "../assets/banner/2.jpg";
import Slider4 from "../assets/banner/3.jpg";
import Slider3 from "../assets/banner/4.jpg";
import { useState } from "react";

const Slider = () => {
  const pics = [Slider1, Slider2, Slider3, Slider4];
  const [picNumber, setPicNumber] = useState(0);

  function handleChange() {
    if (picNumber < 3) setPicNumber(picNumber + 1);
    else setPicNumber(0);
  }

  return (
    <div className="outer-div">
      <img
        src={pics[picNumber]}
        alt=""
        style={{
          width: "80%",
          borderRadius: "12px",
          height: "240px",
          // transition: "opacity 1s ease, visibility 1s ease",
        }}
      />
      <p
        style={{
          left: "10%",
          borderRadius: "0 4px 4px 0",
        }}
        className="slide-btn"
        onClick={handleChange}
      >
        &lt;
      </p>
      <p
        style={{
          right: "10%",
          borderRadius: "4px 0 0 4px",
        }}
        className="slide-btn"
        onClick={handleChange}
      >
        &gt;
      </p>
    </div>
  );
};

export default Slider;
