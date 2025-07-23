import React from "react";
import { Banner, Hero, Product, ProductSlide, ShippingInfo } from "../../router";

const Home = () => {
  return (
    <div>
      <Hero />
      <Product />
      <ShippingInfo/>
      <Banner/>
      <ProductSlide/>
    </div>
  );
};

export default Home;
