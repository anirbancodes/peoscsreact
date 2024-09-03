import React from "react";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import HeroProducts from "../components/HeroProducts";
import Footer from "../components/Footer";
import Slider from "../styles/Slider";
import HeroText from "../components/HeroText";
import Cart from "../components/Cart";
// import HomeSlider from "../components/HomeSlider";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroText />
      <HeroProducts catName={"Fashion"} />

      {/* <Slider />
      <Categories />
      <HeroProducts catName={"Fashion"} />
      <HeroProducts catName={"Electronics"} />
      <HeroProducts catName={"Furniture"} /> */}
      <Footer />
    </>
  );
};

export default Home;
