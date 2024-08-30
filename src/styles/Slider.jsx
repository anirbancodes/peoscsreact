import "../styles/Slider.css";
import SliderPic1 from "../images/slider1.webp";

const Slider = () => {
  return (
    <div className="outer-div">
      <img
        src={SliderPic1}
        alt=""
        style={{ width: "80%", borderRadius: "0" }}
      />
      <p
        style={{
          left: "10%",
          borderRadius: "0 4px 4px 0",
        }}
        className="slide-btn"
      >
        &lt;
      </p>
      <p
        style={{
          right: "10%",
          borderRadius: "4px 0 0 4px",
        }}
        className="slide-btn"
      >
        &gt;
      </p>
    </div>
  );
};

export default Slider;
