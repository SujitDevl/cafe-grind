import React from "react";
import Container from "../layout/Container";

function Hero() {
  return (
    <section className="py-20">
      <Container>
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight">
            Start Your Day with{" "}
            <span className="text-amber-900">Perfect Coffee</span>
          </h1>

          <p className="mt-6 text-lg text-stone-600">
            Cafe Grind brings you handcrafted coffee made from the finest beans,
            brewed with passion and served with calm vibes.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-amber-900 text-white px-6 py-3 rounded-md hover:bg-amber-800 transition">
              View Menu
            </button>

            <button className="border border-stone-300 px-6 py-3 rounded-md text-stone-700 hover:bg-stone-100 transition">
              Learn More
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
