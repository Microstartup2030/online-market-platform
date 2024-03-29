import React from "react";
import Hero from "../ui/Hero";
import Categories from "../ui/Categories";
import Services from "../ui/Services";
import PopularProducts from "../ui/PopularProducts";
import ColoredProducts from "../ui/ColoredProducts";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <PopularProducts />
      <ColoredProducts />
      <Services />
    </>
  );
};

export default Home;
