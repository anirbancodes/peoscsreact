import React from "react";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import HeroProducts from "../components/HeroProducts";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Categories />
      <HeroProducts />
      <Footer />
    </>
  );
};

export default Home;
