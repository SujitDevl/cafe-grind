import Hero from "../components/home/Hero";
import ImageFeature from "../components/home/ImageFeature";
import FeaturedCoffees from "../components/home/FeaturedCoffees";
import SubscribeSection from "../components/home/SubscribeSection";
import React from "react";

function Home() {
  return (
    <>
      <Hero />
      <ImageFeature />
      <FeaturedCoffees />
      <SubscribeSection />
    </>
  );
}

export default Home;
