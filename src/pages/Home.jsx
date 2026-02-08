import React from "react";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import FeaturedCoffees from "../components/home/FeaturedCoffees";
import CTA from "../components/home/CTA";

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturedCoffees />
      <CTA />
    </>
  );
}

export default Home;
