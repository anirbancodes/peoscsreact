import React from "react";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import HeroProducts from "../components/HeroProducts";
import Footer from "../components/Footer";
import Slider from "../styles/Slider";
// import HomeSlider from "../components/HomeSlider";

const Home = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Categories />
      <HeroProducts catName={"Fashion"} />
      <HeroProducts catName={"Electronics"} />
      <HeroProducts catName={"Furniture"} />
      <Footer />
    </>
  );
};

export default Home;
